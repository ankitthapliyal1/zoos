import { Component, OnInit, Inject, HostListener, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('slideFromTopCenter', [
      transition(':enter', [
        style({ transform: 'translate(-50%, -100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translate(-50%, 0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ transform: 'translate(-50%, -100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  faq: any = 1;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  model: boolean = false

  openModel(e: any) {
    this.model = e
  }

  changeText = "Ludo";
  index: number = 0;
  values: string[] = ['Bubble Shooter', 'Adam Runner'];

  quickLudo = [
    {open: false , title: ' Why is Zoos such a popular online game?', desc: 'Zoos, a form of a Zoos game online is easy and fun to learn for starters and many people really enjoy playing it. Chances of winning real money on Zoos is also very appealing. Suitable for peop to play with lots of budget options.' },
    {open: false , title: 'How does one get started on Zoos?', desc: 'Simple. Install the Zoos apk download. Then, register on the ZOOS App. Login on the App. Join Zoos and start playing' },
    {open: false , title: 'How many Zoos accounts can a user have on Zoos?', desc: 'One account only. Having multiple accounts is strictly prohibited on the App. Owning multiple accounts may result in deletion of all duplicate accounts.' },
    { open: false , title: 'Is my Zoos account safe?', desc: 'YES. Your password is the key to your account access. So keep it safe with you and do not share it with anyone. ' },
    {open: false , title: 'Are online Zoos games fixed?', desc: 'Absolutely not! No Zoos game is fixed.<br>We wish to clear this common assumption for our users who play online Zoos, but it’s a largely  unfounded one.' },
    { open: false , title: 'Do we pay rake online?', desc: 'Yes, in Zoos rake is charged in online cash games and online tournaments.' },
    {open: false , title: 'How does a user choose their Zoos tables?', desc: 'Zoos tables on Zoos are chosen in the Game Lobby. So you can choose accordingly. ' },
    {open: false , title: 'What is the best Zoos strategy to play with?', desc: 'Zoos strategy is all about learning, how to play the game to its full potential and not just listening to tricks. You need to keep practicing to understand better but be careful. So, keep practicing and keep playing to play better!' },

  ]

  hirummy = [
    { title: 'How to start playing Zoos?', desc: 'Simple! Register yourself for FREE on our App.<br>It takes only a few seconds. Then you are good to start winning on Zoos.' },
    { title: 'How do I join a rummy table on Zoos to play online  rummy cash games?', desc: 'Go to Games and select Rummy, there you will be able to see different cash tables to play.' },
    { title: 'What details do I have to provide for registering?', desc: 'You would need to register using your contact details i.e. mobile number and e-mail id. We have an OTP login for extra safety.' },
    { title: 'Does a user have to complete their profile all at one go?', desc: 'Feel free to complete your profile as and when you like. You can go back and edit, modify and update at any point of time any number of times you wish to.' },
    { title: 'Is there a limit to how much money I can make through Zoos?', desc: 'No! No limits are set as to how much money a user can add. There are regular offers for users who deposit money on NostraRummy.<br>However, NostraRummy reviews its terms and policies regularly in the interest of the public at regular intervals and it is the duty of every user to stay updated with it. ' },
    {
      title: 'In case of issues, is there a customer support team to take care of my issues?', desc: 'Yes! Of course.Feel free to connect to us or email your issue.'
    },
    {
      title: 'How can I get my winning rummy money into my account/wallet?', desc: 'Instant withdrawals are available. You can withdraw  immediately once you have reached the minimum withdrawal limits'
    },
    {
      title: 'How does one add money to my account? ', desc: 'Modes of adding cash can be by Credit Card, Debit Card, Net Banking and UPI.Wish to use digital wallets, yes we can use wallets like Paytm or Mobikwik.This is a 100% Indian rummy cash game where players can play rummy and win cash.'
    },
  ]

  snakeBite = [
    { title: 'What all Fantasy sports are available on ZOOS?', desc: 'ZOOS is a fantasy games app with various Fantasy games included like Fantasy cricket,Fantasy football, Fantasy table-tennis and kabaddi are skilled based games which are popular among people in India.' },
    { title: 'How to Play Fantasy Sports on ZOOS?', desc: 'To Play Fantasy Sports on ZOOS, you need to choose  any of the Challenges present in the home screen. There are different sports like Football, Cricket, Kabaddi, and Table Tennis. If there is a match of SA vs ENG, Test 1, Click on the Challenge and start making the team based on your Sports Knowledge.' },
    { title: 'What advantage does one have choosing a player captain and vice-captain?', desc: 'The captain and vice-captain chosen are the ones you  predict to be the first best and second-best players of the match respectively. Your chosen captain wins you twice the points for his performance, the vice-captain earns 1.5 times the points.<br> Choose wisely for extra bonus points this way.' },
    { title: 'When unable to sign-in on the App, what to do?', desc: 'Use only your registered e-mail address and correct password to sign-in.<br>Please note that the passwords are case sensitive.<br>If you are registering for the 1st time, then you will need to activate your account before.<br>If you still have issues logging in, then please connect with the customer service team for quick and easy resolution.' },
    { title: 'What is the cost involved in making a team in Fantasy Sports?', desc: 'It is completely FREE to play. You have contests that have entry FEES to WIN real cash.' },
    { title: 'How can we join a contest to play and WIN?', desc: 'Once you have created any team for a match, you will be redirected to a Contest page where you can see all the contests present. If you want to join  a contest, you need to click on the Join button adjacent to the Contest Name.' },
    { title: 'Can changes be made to my Playing 11 squad after confirming selection?', desc: 'Yes! Feel free to make unlimited changes but before the deadline for that particular game.' },
    { title: 'Any particular selection process I have to stick to for Fantasy Cricket?', desc: 'No. Feel free to choose players as per your plans. We only govern the bare minimum number of players in each position i.e wicket-keeper, all-rounder, batsmen and bowler.' },
  ]

  activeFeatureIndex = 0;
  scrolled: boolean = false;

  @HostListener('window:scroll')
  checkScroll() {

    // dark header on scroll
    this.scrolled = window.scrollY > 0;

   // active feature on scroll
    const featureSections = document.querySelectorAll('.feature');
    const middleOfViewport = window.innerHeight / 2;

    for (let i = 0; i < featureSections.length; i++) {
      const featureSection = featureSections[i] as HTMLElement;
      const rect = featureSection.getBoundingClientRect();
      const elementMiddle = (rect.top + rect.bottom) / 2;
      if (elementMiddle <= middleOfViewport) {
        this.activeFeatureIndex = i;
      }
    }
  }



  typingInterval: any;
  deletingInterval: any;

  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    this.clearIntervals();
  }

  startAnimation() {
    this.clearIntervals();
    this.typeText();
  }

  typeText() {
    const targetValue = this.values[this.index];
    let currentValue = '';

    this.typingInterval = setInterval(() => {
      if (currentValue.length < targetValue.length) {
        currentValue = targetValue.slice(0, currentValue.length + 1);
        this.changeText = currentValue;
      } else {
        clearInterval(this.typingInterval);
        this.deleteText();
      }
    }, 300);
  }

  deleteText() {
    let currentValue = this.changeText;

    this.deletingInterval = setInterval(() => {
      if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, currentValue.length - 1);
        this.changeText = currentValue;
      } else {
        clearInterval(this.deletingInterval);
        this.index = (this.index + 1) % this.values.length;
        setTimeout(() => {
          this.startAnimation();
        }, 100);
      }
    }, 100);
  }

  clearIntervals() {
    clearInterval(this.typingInterval);
    clearInterval(this.deletingInterval);
  }

  toTop(){
    window.scroll(0,0)
  }

  // play section

  @ViewChild('tabSelector') tabSelector:any = ElementRef;
  activeIndex = 0;

  ngAfterViewInit() {
    setInterval(() => {
      this.nextTab();
    }, 8000);
  }

  nextTab() {
    const tabs = this.tabSelector.nativeElement.querySelectorAll('.animate');

    tabs[this.activeIndex].classList.remove('active');
    this.activeIndex = (this.activeIndex + 1) % tabs.length;

    tabs[this.activeIndex].classList.add('active');
  }


  //Faq section
  faqClick(e: any) {
    this.faq = e
    console.log(this.faq)
  }




  accordionItems = [
    { title: 'Accordion Item 1', content: 'Content for Accordion Item 1', open: false },
    { title: 'Accordion Item 2', content: 'Content for Accordion Item 2', open: false },
    { title: 'Accordion Item 3', content: 'Content for Accordion Item 3', open: false }
  ];

  toggleAccordion(index: number) {
    this.quickLudo[index].open = !this.quickLudo[index].open;
  }


  accordian:boolean = true

  openAcordian(){
    this.accordian = !this.accordian 
    console.log(this.accordian)
  }




}
