/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true,
  module:true, require:true, exports:true */

(function () {
  "use strict";

  var crud = require('../lib/crud');

  /**
  Characteristics may be used to create additional layers of information
  about items, customers, CRM accounts, and more.
  For example, characteristics defined on an Item master may be associated
  with sales order items. And, if the sales order leads to the automatic
  generation of additional orders (i.e., Work orders or purchase orders),
  then the subsequent orders will inherit the parent sales order
  characteristics.
  @class
  @alias Characteristic
  @property {String} Name
  @property {Type} Characteristic Type
  @property {Boolean} Searchable
  @property {Boolean} Roles
  **/

  var spec = {
      recordType: "XM.Characteristic",
      //autoTestAttributes: true,
      enforceUpperKey: false,
      collectionType: "XM.CharacteristicCollection",
      listKind: "XV.CharacteristicList",
      instanceOf: "XM.Document",
      attributes: ["name", "characteristicType", "isSearchable", "notes", "mask", "validator",
                  "isAddresses", "isContacts", "isAccounts", "isItems", "isInvoices",
                  "isEmployees", "isIncidents", "isOpportunities", "isProjects", "isSalesOrders"],
      idAttribute: "name",
      //extensions: ["crm"],
      isLockable: true,
      cacheName: "XM.characteristics",
      privileges: {
        createUpdateDelete: "MaintainCharacteristics",
        //read: "ViewCharacteristics"
      },
      createHash: {
        name: "Test Characteristic" + Math.random(),
        isSearchable: true,
        isContacts: true
      },
      updatableField: "name",
      defaults: {
        characteristicType: 0,
        isAddresses: false,
        isContacts: false,
        isItems: false,
        isEmployees: false,
        isInvoices: false,
        isSearchable: true
      }
    };

  //var additionalTests = function () {};

  exports.spec = spec;
  //exports.additionalTests = additionalTests;
}());