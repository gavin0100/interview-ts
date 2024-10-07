import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../../../../shared/dto/product-dto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenService} from "../../../../service/token.service";
import {CartItemService} from "../../../../service/cart-item.service";
import {WishlistItemService} from "../../../../service/wishlist-item.service";
import {UtilService} from "../../../../service/util.service";
import {WishlistItemDto} from "../../../../shared/dto/wishlist-item-dto";
import {CartItemDto} from "../../../../shared/dto/cart-item-dto";
import {ProductService} from "../../../../service/product/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isTop10ColombiaProductsLoading = true;
  slidesPerView = 5;
  top10ColombiaProducts: ProductDto[] = [];
  cartItemForm:FormGroup;
  isWishlist: ProductDto[] = [];
  selectedProduct: ProductDto;
  wishlistItemForm:FormGroup;
  username: string;
  wishlistItems: WishlistItemDto[] = [];
  i = 5;

  constructor(private formBuilder:FormBuilder,
              private tokenService:TokenService,
              private cartItemService: CartItemService,
              private wishlistItemService:WishlistItemService,
              private utilService:UtilService,
              private productService:ProductService) {

  }

  ngOnInit(): void {
    const cartItems = this.cartItemService.getCartItemsFromLocalStorage();
    const wishlistItems = this.wishlistItemService.getWishlistItemsFromLocalStorage();
    this.username = this.tokenService.getUsername();
    this.convertCartItemsToUserCart(cartItems, this.username);
    this.convertWishlistItemsToUserWishlist(wishlistItems, this.username);
    this.cartItemForm = this.formBuilder.group({
      quantity:1,
    });
    this.wishlistItemForm = this.formBuilder.group({
      product: null,
    })
    this.getTop10ProductsInColombia();
  }

  handleWishlist(event:any){
    this.selectedProduct = event;
    if(this.wishlistItemForm.valid){
      this.wishlistItemForm.value.product = this.selectedProduct;
    }
    if (!this.tokenService.getAccessToken() || this.tokenService.getUsername() == null) {
      if(this.checkExist(this.isWishlist, this.selectedProduct)){
        this.isWishlist.splice(this.isWishlist.indexOf(this.selectedProduct),1);
      }else{
        this.isWishlist.push(this.selectedProduct);
      }
      this.wishlistItemService.handleWishlistNotLogin(this.wishlistItemForm.value);
    }else{
      this.wishlistItemService.getWishlist(this.username).subscribe(wishlist=>{
        this.wishlistItemForm.value.wishlist = wishlist;
        if(this.checkExist(this.isWishlist, this.selectedProduct)){
          this.deleteFromWishlist(this.selectedProduct.id);
        }else{
          this.addToWishlist(this.wishlistItemForm.value);
        }
      })
    }
  }

  checkExist(isWishlist: ProductDto[], product: ProductDto): boolean {
    return !!isWishlist.find(item => item.id === product.id);
  }

  addToCart(event:any){
    this.selectedProduct = event;
    if(this.cartItemForm.valid){
      this.cartItemForm.value.productName = this.selectedProduct.name;
      this.cartItemForm.value.slug = this.selectedProduct.slug;
      this.cartItemForm.value.productDetail =this.selectedProduct.productDetails[0];
      this.cartItemForm.value.productImage =  this.selectedProduct.images[0];
      this.cartItemForm.value.price = this.selectedProduct.productDetails[0].price;
      this.cartItemForm.value.total = this.cartItemForm.value.quantity * this.cartItemForm.value.price;
    }
    console.log(this.cartItemForm.value)
    if(!this.tokenService.getAccessToken() || this.tokenService.getUsername() == null){
      this.cartItemService.addToCartNotLogin(this.cartItemForm.value);
    }else{
      this.cartItemService.getCart(this.tokenService.getUsername()).subscribe({
        next:(data)=>{
          this.cartItemForm.value.cart = data;
          this.addCartItemToCart(this.cartItemForm.value);
        }
      })
    }
  }

  calcStars(starCount:number){
    return this.utilService.calcStars(starCount);
  }

  deleteFromWishlist(productId:number){
    const wishlistItem = this.wishlistItems.find(item=>item.product.id === productId);
    this.wishlistItemService.deleteWithLogin(wishlistItem?.id).subscribe({
      next:(data)=>{
        this.utilService.openSnackBar(data.message, "Đóng");
        this.wishlistItemService.deleteWishlistItemsBehavior.next(productId);
        const index = this.isWishlist.findIndex(item => item.id === productId);
        this.isWishlist.splice(index,1);
        this.getWishlistItems();
        console.log(this.wishlistItems);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  addToWishlist(wishlistItem:WishlistItemDto){
    this.wishlistItemService.addWishlistItemToWishlist(wishlistItem).subscribe({
      next:(data)=>{
        this.utilService.openSnackBar(data.message, "Đóng");
        this.wishlistItemService.addWishlistItemsBehavior.next(wishlistItem);
        this.isWishlist.push(wishlistItem.product);
        this.getWishlistItems();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  getWishlistItems(){
    this.wishlistItemService.getWishlist(this.username).subscribe(wishlist=>{
      this.wishlistItemService.getWishlistItems(wishlist.id).subscribe(items=>{
        this.wishlistItems = items;
      })
    })
  }

  addCartItemToCart(cartItem:CartItemDto){
    this.cartItemService.addCartItemToCart(cartItem).subscribe({
      next:(data)=>{
        this.utilService.openSnackBar(data.message, "Đóng");
        this.cartItemService.addCartItemsBehavior.next(cartItem);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  getTop10ProductsInColombia(){
    this.productService.getTop10ProductsInColombia().subscribe({
      next:(data)=>{
        this.top10ColombiaProducts = data;
        this.isTop10ColombiaProductsLoading = false;
      },
      error:(err)=>{
        console.log(err);
        this.isTop10ColombiaProductsLoading = false;
      }
    })
  }

  convertCartItemsToUserCart(cartItems: CartItemDto[], username:string){
    if(this.username){
      if(cartItems.length > 0){
        this.cartItemService.getCart(username).subscribe({
          next:(cart)=>{
            console.log(cart);
            console.log(cartItems);
            cartItems.forEach(ci=>{
              ci.cart = cart;
              this.cartItemService.addCartItemToCart(ci).subscribe(item=>{
                console.log(item);
              });
              this.cartItemService.cartItemsBehavior.next([...this.cartItemService.cartItemsBehavior.getValue(), ci]);
            })
            localStorage.removeItem("cartItems");
          }
        });
      }else{
        this.cartItemService.getCart(username).subscribe(cart=>{
          this.cartItemService.getCartItems(cart.id).subscribe(items=>{
            this.cartItemService.cartItemsBehavior.next(items);
          })
        })
      }
    }else{
      if(cartItems.length > 0){
        this.cartItemService.cartItemsBehavior.next(cartItems);
      }else{
        this.cartItemService.cartItemsBehavior.next([]);
      }
    }
  }

  convertWishlistItemsToUserWishlist(wishlistItems: WishlistItemDto[], username:string){
    if(this.username){
      if(wishlistItems.length > 0){
        this.wishlistItemService.getWishlist(username).subscribe(wishlist=>{
          wishlistItems.forEach(wi=>{
            wi.wishlist = wishlist;
            this.wishlistItemService.addWishlistItemToWishlist(wi).subscribe(item=>{
              console.log(item);
            });
            this.wishlistItemService.wishlistItemsBehavior.next([...this.wishlistItemService.wishlistItemsBehavior.getValue(), wi]);
          });
          this.getWishlistItems();
          this.isWishlist = wishlistItems.map(item=>item.product);
          localStorage.removeItem("wishlistItems");
        });
      }else{
        this.wishlistItemService.getWishlist(username).subscribe(wishlist=>{
          this.wishlistItemService.getWishlistItems(wishlist.id).subscribe(items=>{
            this.wishlistItems = items;
            this.isWishlist = items.map(item=>item.product);
            this.wishlistItemService.wishlistItemsBehavior.next(items);
          })
        })
      }
    }else{
      if(wishlistItems.length > 0){
        this.isWishlist = wishlistItems.map(item=>item.product);
        this.wishlistItemService.wishlistItemsBehavior.next(wishlistItems);
      }else{
        this.wishlistItemService.wishlistItemsBehavior.next([]);
      }
    }
  }
}
