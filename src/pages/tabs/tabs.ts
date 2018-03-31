import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PromotionPage } from '../promotion/promotion';
import { PerchaseHistoryPage } from '../perchase-history/perchase-history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerchaseHistoryPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
