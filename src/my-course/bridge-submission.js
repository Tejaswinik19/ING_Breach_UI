/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';


class Bridgesubmission extends PolymerElement {

  static get properties() {        
    return {
        
      franchise: {
            type: Array,
            value: [
                {
                    name: 'Private Banking'
                },
                {
                    name: 'RBSI'
                } ,
                {
                  name: 'Service'
              }                    
            ]
        },

        franchiesSelected:{
            type: String
        },
        
        Services :{
          type: Array,
          value: [
              {
                  name: 'Payments'
              },
              {
                  name: 'Shared Services'
              } ,
              {
                name: 'CIO Tech'
            },
            {
              name: 'Innovation & Solutions'
          }                     
          ]
        },
        privateBanking: {
          type: Array,
          value: [
              {
                  name: 'Business Banking'
              },
              {
                  name: 'Specialist Banking'
              } ,
              {
                name: 'Customer Experience'
            },
            {
              name: 'Branch & Premier'
          }                     
          ]
      },

      RBSI: {
        type: Array,
        value: [
            {
                name: 'Executive Office'
            },
            {
                name: 'Customer Experience'
            } ,
            {
              name: 'Personal and Business Banking'
          },
          {
            name: 'Risk'
        },
        {
          name: 'Finance'
      }, 
      {
        name: 'Transformation'
    },                 
        ]
    },

    identifyBridge:{
      type: Array,
            value: [
                {
                    name: 'I identified the breach'
                },
                {
                    name: 'A colleague identified the breach'
                } ,
                {
                  name: 'A company reported it'
              }                    
            ]
    },

    thirdPartySelected:{
      type: Array,
      value: [
        {
          name: 'Supplier'
      },
      {
          name: 'Another third party'
      } ,
      {
        name: 'Donot know it'
    }  
      ]
    },
    
    yesNoSelected:{
      type: Array,
      value: [
        {
          name: 'Yes'
      },
      {
          name: 'No'
      }
    ]
    },

    helpsCategory:{
      type: Array,
      value: [
        {
          name: 'Compromised details'
      },
      {
          name: 'Mail/Statement issues'
      },
      {
        name: 'Loss of device/physical files'
    },

    {
      name: '•	Colleague breached the banks Code of Conduct e.g. viewing/amending/deleting accounts without authorisation'
    },
    {
    name: 'Fax sent to an incorrect number'
    },
    {
      name: 'Information found by a third party / member of public because it was left in an insecure place'
    },

    ]
    },
        
    }
}

_paymentSelected (e) {
  //console.log(e.target.selectedItem.textContent)
  var selectedItem = e.target.selectedItem;
  if (selectedItem) {
      this.franchiesSelected = selectedItem.value;
  }
}

_RBSISelected (e) {
  //console.log(e.target.selectedItem.textContent)
  var selectedItem = e.target.selectedItem;
  if (selectedItem) {
      this.RBSISelected = selectedItem.value;
  }
}
_serviceSelected(e) {
  //console.log(e.target.selectedItem.textContent)
  var selectedItem = e.target.selectedItem;
  if (selectedItem) {
      this.ServiceSelected = selectedItem.value;
  }
}

_helpsCategory(e){
  var selectedItem = e.target.selectedItem;
  if (selectedItem) {
      this.helpsCategory = selectedItem.value;
  }
}

_handlesubmit(){
  
    var addPetAjax= this.$.addPetAjax;
    addPetAjax.method='post';
    let objPet={"franchies":this.franchiesSelected,
     "bussness_area":this.ServiceSelected,
    "identify_by": this.identify_by,
    "c_full_name":this._identifyBridgeSelected,
    
    "reported_to": "Admin",
    "company_name":"ING",
    "contact_details":"9576678",
    "aware_of_breach":"01-14-2019",
    "breach_date":"01-14-2019"
    
    };
    addPetAjax.body=JSON.stringify(objPet);
    addPetAjax.generateRequest();
  
}

handleResponse(event){
  console.log(event.detail.response);;
  var status = event.detail.response.status;
 // document.querySelector('pets-peers-app').shadowRoot.querySelector('layoute-page').set('route.path','/mypets');
 alert('saved successsully');
  
}
_getUrl() {
  return baseUrl + "/api/v1/breach/add";
}

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <iron-ajax
     
      id=addPetAjax
      body="objPet"
      url="[[_getUrl()]]"
      content-type="application/json"
      on-response=handleResponse
      handle-as="json">
      </iron-ajax>
      
      <div class="card" >
       
        Section 1: About you
        <div class="card">
        <div class="clear"></div>
                <paper-dropdown-menu name="franchiesSelected" label="Your franchise"  on-iron-select="_paymentSelected">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <dom-repeat items={{franchise}}>
                           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
                        </dom-repeat>
                    </paper-listbox>
                </paper-dropdown-menu>
        <div class="clear"></div>

        <paper-dropdown-menu name="privateBanking" label="Private Banking:"  on-iron-select="privateBanking">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <dom-repeat items={{privateBanking}}>
                           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
                        </dom-repeat>
                    </paper-listbox>
        </paper-dropdown-menu>
        <div class="clear"></div>
        <paper-dropdown-menu name="RBSISelected" label="RBSI:"  on-iron-select="_RBSISelected">
        <paper-listbox slot="dropdown-content" class="dropdown-content">
            <dom-repeat items={{RBSI}}>
               <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
            </dom-repeat>
        </paper-listbox>
    </paper-dropdown-menu>
    <div class="clear"></div>
    <paper-dropdown-menu name="ServiceSelected" label="Service Selected:"  on-iron-select="_serviceSelected">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
        <dom-repeat items={{Services}}>
           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu>
</div>
<hr/>

<div>Section 2: How did you find out about the breach? </div>
<hr/>
<div class="card">
<paper-dropdown-menu name="identifyBridge" label="Who identified the breach?"  on-iron-select="_identifyBridgeSelected">
<paper-listbox slot="dropdown-content" class="dropdown-content">
    <dom-repeat items={{identifyBridge}}>
       <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
    </dom-repeat>
</paper-listbox>
</paper-dropdown-menu>
<div class="clear"></div>


<paper-dropdown-menu name="thirdPartySelected" label="Service Selected:"  on-iron-select="_thirdPartySelected">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
        <dom-repeat items={{thirdPartySelected}}>
           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu>
</div>

<hr/>
<div>Section 3: What has happened and to whom? </div>
<hr/>
<p>Have we been made aware of this before?</p>

<div class="card">

<paper-dropdown-menu name="yesNoSelected" label="aware about:"  on-iron-select="_yesNoSelected">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
        <dom-repeat items={{yesNoSelected}}>
           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu name="helpsCategory" label="helps Category:"  on-iron-select="_helpsCategory">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
        <dom-repeat items={{helpsCategory}}>
           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu>
<div>Has the number been faxed to ask them to destroy the information
</div>
<paper-dropdown-menu name="yesNoSelected" label="destroy information:"  on-iron-select="_yesNoSelected">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
        <dom-repeat items={{yesNoSelected}}>
           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu>
</div>

<div> 
<paper-button class="add-pet-button" raised on-click="_handlesubmit"> Submit Bridge </paper-button>
</div>

</div>

</div>
</div>
    `;
  }
}

window.customElements.define('bridge-submission', Bridgesubmission);
