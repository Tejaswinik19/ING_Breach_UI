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
    }
        
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


  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <script src="/node_modules/web-animations-js/web-animations-next-lite.min.js"></script>
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

        <paper-dropdown-menu name="privateBanking" label="Private Banking:"  on-iron-select="_RBSISelected">
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
</div>


</div>
</div>
    `;
  }
}

window.customElements.define('bridge-submission', Bridgesubmission);
