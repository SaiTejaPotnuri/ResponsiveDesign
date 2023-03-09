import { Component } from '@angular/core'
import { IsActiveMatchOptions } from '@angular/router'
import { PrimeNGConfig } from 'primeng/api'
import { Product } from 'src/modals/product'
import { ProductService } from 'src/services/productServices'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }
  enablePart5DialogBoxStatus: boolean = false
  testingContainer: boolean = true
  title = 'cv_resume_template'
  selectedItem
  showErrorToTopIcon: boolean = false
  liTagsList
  secTagsList
  activateSideBarStatus: boolean = false
  anchorTagsList
  anchorTags
  sideBarNavLinks
  sideBarNavAnchor
  part5SelcetedItem: string = 'ALL'
  part4SelctedTypeToDisplayContent: string = 'Education'
  imagesList = {
    logoImage: './assets/images/logo.png',
    logoDark: './assets/images/logo-dark.png',
    facebookLogo: './assets/images/facebook.png',
    twitterLogo: './assets/images/twitterIcon.png',
    googleLogo: './assets/images/googleIcon.png',
    dotsIcon: './assets/images/dotsIcon.svg',
    aboutImage: './assets/images/about.png',
    mouseIcon: './assets/images/mouseIcon.svg',
    part4P1: './assets/images/part4p1.jpg',
    part4P2: './assets/images/part4p2.jpg',
    part4P3: './assets/images/part4p3.jpg',
    part4P4: './assets/images/part4p4.jpg',
    part4P5: './assets/images/part4p5.jpg',
    part4P6: './assets/images/part4p6.jpg',
    part4P7: './assets/images/part4p7.jpg',
    part5MainpartImg1: './assets/images/part5MainpartImg1.jpg',
    part5MainpartImg2: './assets/images/part5MainpartImg2.jpg',
    commentSmily: './assets/images/commentSmily.svg',
    basketballIcon: './assets/images/basketballIcon.png',
    piChartIcon: './assets/images/piChartIcon.png',
    arrowNavigatorIcon: './assets/images/arrowNavigatorIcon.png',
    part6titleBackground: './assets/images/part6titleBackground.svg'
  }
  products: Product[]

  responsiveOptions

  constructor (
    private primengConfig: PrimeNGConfig,
    private productServices:ProductService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '950px',
        numVisible: 1,
        numScroll: 1
      }
      // ,
      // {
      //   breakpoint: '560px',
      //   numVisible: 1,
      //   numScroll: 1
      // }
    ]
  }

  ngOnInit () {
    this.primengConfig.ripple = true
    this.productServices.getProductsSmall().then(products => {
      this.products = products
    })

    this.liTagsList = document.querySelectorAll('.navLink')
    this.secTagsList = document.querySelectorAll('section')
    this.anchorTags = document.querySelectorAll('.addColor')

    this.sideBarNavAnchor = document.querySelectorAll('.colorLink')

    this.activeLinksWhileScrollAll()
  }

  activeLinksWhileScrollAll () {
    let len = this.secTagsList.length
    this.checkHeaderHeight()
    let windowScrolly = window.pageYOffset + 97

    while (--len && windowScrolly < this.secTagsList[len].offsetTop) {}
    // console.log(
    //   this.secTagsList[len].offsetTop,
    //   'Section tag value',
    //   window.pageYOffset,
    //   'Offset value'
    // )

    let activeStyle = document.querySelector('.active')
    if (activeStyle !== null) {
      activeStyle.classList.remove('active')
    }

    let listtags = document.querySelector('.colorToAnchor')
    if (listtags !== null) {
      listtags.classList.remove('colorToAnchor')
    }

    // the below line will change the url
    window.location.hash = this.anchorTags[len].hash

    this.liTagsList[len].classList.add('active')
    this.anchorTags[len].classList.add('colorToAnchor')
  }

  activeLinksWhhileClick (e) {
    let activeStyle = document.querySelector('.active')
    if (activeStyle !== null) {
      activeStyle.classList.remove('active')
    }

    let listtags = document.querySelector('.colorToAnchor')
    if (listtags !== null) {
      listtags.classList.remove('colorToAnchor')
    }

    e.target.classList.add('colorToAnchor')

    let headerDiv = document.getElementById('headerContent')

    if (e.target.hash !== '#home') {
      headerDiv.classList.add('headerDivAfterScroll')
      this.showErrorToTopIcon = true
    } else {
      headerDiv.classList.remove('headerDivAfterScroll')
      this.showErrorToTopIcon = false
    }
  }

  showHeaderAfterClick (e) {
    let headerDiv = document.getElementById('headerContent')

    if (e.target.hash != '#home') {
      headerDiv.classList.add('headerDivAfterScroll')
    } else {
      headerDiv.classList.remove('headerDivAfterScroll')
    }

    this.activateSideBar()
  }

  activateSideBar () {
    this.activateSideBarStatus = !this.activateSideBarStatus
  }

  checkHeaderHeight () {
    let headerDiv = document.getElementById('headerContent')
    let windowScrollHeight = window.scrollY

    if (windowScrollHeight > 60) {
      headerDiv.classList.add('headerDivAfterScroll')
    } else if (windowScrollHeight < 60) {
      headerDiv.classList.remove('headerDivAfterScroll')
    }

    windowScrollHeight > 100
      ? (this.showErrorToTopIcon = true)
      : (this.showErrorToTopIcon = false)
  }

  gotoTopPointOfPage () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    let headerDiv = document.getElementById('headerContent')
    headerDiv.classList.remove('headerDivAfterScroll')

    setTimeout(() => {
      this.showErrorToTopIcon = false
      window.location.hash = '#home'
    }, 500)

    let activeStyle = document.querySelector('.active')
    if (activeStyle !== null) {
      activeStyle.classList.remove('active')
    }

    let listtags = document.querySelector('.colorToAnchor')
    if (listtags !== null) {
      listtags.classList.remove('colorToAnchor')
    }

    this.liTagsList[0].classList.add('active')
    this.anchorTags[0].classList.add('colorToAnchor')
  }

  part4HeadingLiActivation (e) {
    let listtags = document.querySelector('.part4HeadingItemActiveStyle')
    if (listtags !== null) {
      listtags.classList.remove('part4HeadingItemActiveStyle')
    }
    e.target.classList.add('part4HeadingItemActiveStyle')

    this.part4SelctedTypeToDisplayContent = e.target.innerText
  }

  part5NavLinkActive (e) {
    let listtags = document.querySelector('.part5NavLiActive')
    if (listtags !== null) {
      listtags.classList.remove('part5NavLiActive')
    }
    e.target.classList.add('part5NavLiActive')

    this.part5SelcetedItem = e.target.innerText
    console.log(this.part5SelcetedItem)
  }

  enablePart5DialogBox () {
    console.log('Hello')

    this.enablePart5DialogBoxStatus = !this.enablePart5DialogBoxStatus
  }
}
