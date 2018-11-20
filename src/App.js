import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
        <form method="get" action="https://www-origin.integration.publishing.service.gov.uk/find-eu-exit-guidance-business" className="js-live-search-form" cf-form="true">
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="sector_business_area">
            <div className="option-select-label" id="option-select-title-sector-business-area">
              Sector / Business Area
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-sector-business-area" className="options-container" id="sector_business_area" style={{maxHeight: 'none', height: 199}}>
            <div className="js-auto-height-inner">
              <label htmlFor="sector_business_area-accommodation-restaurants-and-catering-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-accommodation-restaurants-and-catering-services" defaultValue="accommodation-restaurants-and-catering-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Accommodation, restaurants and catering services" aria-controls="js-search-results-info" />
                Accommodation, restaurants and catering services
              </label>
              <label htmlFor="sector_business_area-aerospace">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-aerospace" defaultValue="aerospace" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Aerospace" aria-controls="js-search-results-info" />
                Aerospace
              </label>
              <label htmlFor="sector_business_area-agriculture">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-agriculture" defaultValue="agriculture" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Agriculture" aria-controls="js-search-results-info" />
                Agriculture
              </label>
              <label htmlFor="sector_business_area-air-transport-aviation">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-air-transport-aviation" defaultValue="air-transport-aviation" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Air transport (Aviation" aria-controls="js-search-results-info" />
                Air transport (Aviation
              </label>
              <label htmlFor="sector_business_area-ancillary-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-ancillary-services" defaultValue="ancillary-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Ancillary Services" aria-controls="js-search-results-info" />
                Ancillary Services
              </label>
              <label htmlFor="sector_business_area-animal-health">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-animal-health" defaultValue="animal-health" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Animal Health" aria-controls="js-search-results-info" />
                Animal Health
              </label>
              <label htmlFor="sector_business_area-automotive">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-automotive" defaultValue="automotive" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Automotive" aria-controls="js-search-results-info" />
                Automotive
              </label>
              <label htmlFor="sector_business_area-banking-market-infrastructure">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-banking-market-infrastructure" defaultValue="banking-market-infrastructure" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Banking, market infrastructure" aria-controls="js-search-results-info" />
                Banking, market infrastructure
              </label>
              <label htmlFor="sector_business_area-broadcasting">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-broadcasting" defaultValue="broadcasting" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Broadcasting" aria-controls="js-search-results-info" />
                Broadcasting
              </label>
              <label htmlFor="sector_business_area-chemicals">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-chemicals" defaultValue="chemicals" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Chemicals" aria-controls="js-search-results-info" />
                Chemicals
              </label>
              <label htmlFor="sector_business_area-computer-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-computer-services" defaultValue="computer-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Computer Services" aria-controls="js-search-results-info" />
                Computer Services
              </label>
              <label htmlFor="sector_business_area-construction-contracting">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-construction-contracting" defaultValue="construction-contracting" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Construction Contracting" aria-controls="js-search-results-info" />
                Construction Contracting
              </label>
              <label htmlFor="sector_business_area-education">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-education" defaultValue="education" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Education" aria-controls="js-search-results-info" />
                Education
              </label>
              <label htmlFor="sector_business_area-electricity">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-electricity" defaultValue="electricity" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Electricity" aria-controls="js-search-results-info" />
                Electricity
              </label>
              <label htmlFor="sector_business_area-electronics">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-electronics" defaultValue="electronics" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Electronics" aria-controls="js-search-results-info" />
                Electronics
              </label>
              <label htmlFor="sector_business_area-environmental-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-environmental-services" defaultValue="environmental-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Environmental Services" aria-controls="js-search-results-info" />
                Environmental Services
              </label>
              <label htmlFor="sector_business_area-fisheries">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-fisheries" defaultValue="fisheries" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Fisheries" aria-controls="js-search-results-info" />
                Fisheries
              </label>
              <label htmlFor="sector_business_area-food-and-drink">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-food-and-drink" defaultValue="food-and-drink" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Food and Drink" aria-controls="js-search-results-info" />
                Food and Drink
              </label>
              <label htmlFor="sector_business_area-furniture-and-other-manufacturing">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-furniture-and-other-manufacturing" defaultValue="furniture-and-other-manufacturing" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Furniture and other manufacturing" aria-controls="js-search-results-info" />
                Furniture and other manufacturing
              </label>
              <label htmlFor="sector_business_area-gas-markets">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-gas-markets" defaultValue="gas-markets" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Gas markets" aria-controls="js-search-results-info" />
                Gas markets
              </label>
              <label htmlFor="sector_business_area-goods-sectors-each-0-4-of-gva">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-goods-sectors-each-0-4-of-gva" defaultValue="goods-sectors-each-0-4-of-gva" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Goods sectors each <0.4% of GVA" aria-controls="js-search-results-info" />
                Goods sectors each &lt;0.4% of GVA
              </label>
              <label htmlFor="sector_business_area-imports">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-imports" defaultValue="imports" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Imports" aria-controls="js-search-results-info" />
                Imports
              </label>
              <label htmlFor="sector_business_area-imputed-rent">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-imputed-rent" defaultValue="imputed-rent" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Imputed Rent" aria-controls="js-search-results-info" />
                Imputed Rent
              </label>
              <label htmlFor="sector_business_area-insurance">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-insurance" defaultValue="insurance" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Insurance" aria-controls="js-search-results-info" />
                Insurance
              </label>
              <label htmlFor="sector_business_area-land-transport-excl-rail">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-land-transport-excl-rail" defaultValue="land-transport-excl-rail" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Land transport (excl. rail)" aria-controls="js-search-results-info" />
                Land transport (excl. rail)
              </label>
              <label htmlFor="sector_business_area-medical-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-medical-services" defaultValue="medical-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Medical services" aria-controls="js-search-results-info" />
                Medical services
              </label>
              <label htmlFor="sector_business_area-motor-trades">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-motor-trades" defaultValue="motor-trades" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Motor Trades" aria-controls="js-search-results-info" />
                Motor Trades
              </label>
              <label htmlFor="sector_business_area-network-industries-0-3-of-gva">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-network-industries-0-3-of-gva" defaultValue="network-industries-0-3-of-gva" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Network Industries <0.3% of GVA" aria-controls="js-search-results-info" />
                Network Industries &lt;0.3% of GVA
              </label>
              <label htmlFor="sector_business_area-oil-and-gas-production">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-oil-and-gas-production" defaultValue="oil-and-gas-production" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Oil and gas production" aria-controls="js-search-results-info" />
                Oil and gas production
              </label>
              <label htmlFor="sector_business_area-other-personal-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-other-personal-services" defaultValue="other-personal-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Other personal services" aria-controls="js-search-results-info" />
                Other personal services
              </label>
              <label htmlFor="sector_business_area-parts-and-machinery">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-parts-and-machinery" defaultValue="parts-and-machinery" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Parts and machinery" aria-controls="js-search-results-info" />
                Parts and machinery
              </label>
              <label htmlFor="sector_business_area-pharmaceuticals">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-pharmaceuticals" defaultValue="pharmaceuticals" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Pharmaceuticals" aria-controls="js-search-results-info" />
                Pharmaceuticals
              </label>
              <label htmlFor="sector_business_area-post">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-post" defaultValue="post" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Post" aria-controls="js-search-results-info" />
                Post
              </label>
              <label htmlFor="sector_business_area-professional-and-business-services">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-professional-and-business-services" defaultValue="professional-and-business-services" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Professional and Business services" aria-controls="js-search-results-info" />
                Professional and Business services
              </label>
              <label htmlFor="sector_business_area-public-administration-and-defence">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-public-administration-and-defence" defaultValue="public-administration-and-defence" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Public Administration and Defence" aria-controls="js-search-results-info" />
                Public Administration and Defence
              </label>
              <label htmlFor="sector_business_area-rail">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-rail" defaultValue="rail" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Rail" aria-controls="js-search-results-info" />
                Rail
              </label>
              <label htmlFor="sector_business_area-real-estate-excl-imputed-rent">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-real-estate-excl-imputed-rent" defaultValue="real-estate-excl-imputed-rent" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Real Estate (excl. Imputed Rent)" aria-controls="js-search-results-info" />
                Real Estate (excl. Imputed Rent)
              </label>
              <label htmlFor="sector_business_area-retail">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-retail" defaultValue="retail" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Retail" aria-controls="js-search-results-info" />
                Retail
              </label>
              <label htmlFor="sector_business_area-service-sectors-each-1-of-gva">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-service-sectors-each-1-of-gva" defaultValue="service-sectors-each-1-of-gva" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Service sectors each <1% of GVA" aria-controls="js-search-results-info" />
                Service sectors each &lt;1% of GVA
              </label>
              <label htmlFor="sector_business_area-social-work">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-social-work" defaultValue="social-work" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Social Work" aria-controls="js-search-results-info" />
                Social Work
              </label>
              <label htmlFor="sector_business_area-steel-and-other-metals-commodities">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-steel-and-other-metals-commodities" defaultValue="steel-and-other-metals-commodities" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Steel and other metals/commodities" aria-controls="js-search-results-info" />
                Steel and other metals/commodities
              </label>
              <label htmlFor="sector_business_area-telecoms">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-telecoms" defaultValue="telecoms" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Telecoms" aria-controls="js-search-results-info" />
                Telecoms
              </label>
              <label htmlFor="sector_business_area-textiles-and-clothing">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-textiles-and-clothing" defaultValue="textiles-and-clothing" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Textiles and clothing" aria-controls="js-search-results-info" />
                Textiles and clothing
              </label>
              <label htmlFor="sector_business_area-top-ten-trade-partners-by-value">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-top-ten-trade-partners-by-value" defaultValue="top-ten-trade-partners-by-value" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Top Ten Trade Partners by Value" aria-controls="js-search-results-info" />
                Top Ten Trade Partners by Value
              </label>
              <label htmlFor="sector_business_area-warehousing-and-support-for-transportation">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-warehousing-and-support-for-transportation" defaultValue="warehousing-and-support-for-transportation" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Warehousing and support for transportation" aria-controls="js-search-results-info" />
                Warehousing and support for transportation
              </label>
              <label htmlFor="sector_business_area-water-transport-maritime-ports">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-water-transport-maritime-ports" defaultValue="water-transport-maritime-ports" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Water Transport (Maritime/ports)" aria-controls="js-search-results-info" />
                Water Transport (Maritime/ports)
              </label>
              <label htmlFor="sector_business_area-wholesale-excl-motor-vehicles">
                <input type="checkbox" name="sector_business_area[]" id="sector_business_area-wholesale-excl-motor-vehicles" defaultValue="wholesale-excl-motor-vehicles" data-track-category="filterClicked" data-track-action="Sector / Business Area" data-track-label="Wholesale (excl. Motor Vehicles)" aria-controls="js-search-results-info" />
                Wholesale (excl. Motor Vehicles)
              </label>
            </div>
          </div>
        </div>
        
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="doing_business_in_the_eu">
            <div className="option-select-label" id="option-select-title-doing-business-in-the-eu">
              Doing business in the EU
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-doing-business-in-the-eu" className="options-container" id="doing_business_in_the_eu">
            <div className="js-auto-height-inner">
              <label htmlFor="doing_business_in_the_eu-do-business-in-the-eu">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-do-business-in-the-eu" defaultValue="do-business-in-the-eu" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Do business in the EU" aria-controls="js-search-results-info" />
                Do business in the EU
              </label>
              <label htmlFor="doing_business_in_the_eu-buying">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-buying" defaultValue="buying" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Buying" aria-controls="js-search-results-info" />
                Buying
              </label>
              <label htmlFor="doing_business_in_the_eu-selling">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-selling" defaultValue="selling" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Selling" aria-controls="js-search-results-info" />
                Selling
              </label>
              <label htmlFor="doing_business_in_the_eu-transporting">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-transporting" defaultValue="transporting" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Transporting" aria-controls="js-search-results-info" />
                Transporting
              </label>
              <label htmlFor="doing_business_in_the_eu-other-eu">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-other-eu" defaultValue="other-eu" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Other - EU" aria-controls="js-search-results-info" />
                Other - EU
              </label>
              <label htmlFor="doing_business_in_the_eu-other-rest-of-the-world">
                <input type="checkbox" name="doing_business_in_the_eu[]" id="doing_business_in_the_eu-other-rest-of-the-world" defaultValue="other-rest-of-the-world" data-track-category="filterClicked" data-track-action="Doing business in the EU" data-track-label="Other - Rest of the world" aria-controls="js-search-results-info" />
                Other - Rest of the world
              </label>
            </div>
          </div>
        </div>
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="regulations_and_standards">
            <div className="option-select-label" id="option-select-title-regulations-and-standards">
              Regulations and standards
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-regulations-and-standards" className="options-container" id="regulations_and_standards">
            <div className="js-auto-height-inner">
              <label htmlFor="regulations_and_standards-products-or-goods">
                <input type="checkbox" name="regulations_and_standards[]" id="regulations_and_standards-products-or-goods" defaultValue="products-or-goods" data-track-category="filterClicked" data-track-action="Regulations and standards" data-track-label="Products or goods" aria-controls="js-search-results-info" />
                Products or goods
              </label>
            </div>
          </div>
        </div>
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="personal_data">
            <div className="option-select-label" id="option-select-title-personal-data-eea">
              Personal data (EEA)
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-personal-data-eea" className="options-container" id="personal_data">
            <div className="js-auto-height-inner">
              <label htmlFor="personal_data-processing-personal-data">
                <input type="checkbox" name="personal_data[]" id="personal_data-processing-personal-data" defaultValue="processing-personal-data" data-track-category="filterClicked" data-track-action="Personal data (EEA)" data-track-label="Processing personal data" aria-controls="js-search-results-info" />
                Processing personal data
              </label>
              <label htmlFor="personal_data-interacting-with-eea-website">
                <input type="checkbox" name="personal_data[]" id="personal_data-interacting-with-eea-website" defaultValue="interacting-with-eea-website" data-track-category="filterClicked" data-track-action="Personal data (EEA)" data-track-label="Interacting with EEA website" aria-controls="js-search-results-info" />
                Interacting with EEA website
              </label>
              <label htmlFor="personal_data-digital-service-provider">
                <input type="checkbox" name="personal_data[]" id="personal_data-digital-service-provider" defaultValue="digital-service-provider" data-track-category="filterClicked" data-track-action="Personal data (EEA)" data-track-label="Digital service provide" aria-controls="js-search-results-info" />
                Digital service provide
              </label>
            </div>
          </div>
        </div>
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="intellectual_property">
            <div className="option-select-label" id="option-select-title-intellectual-property">
              Intellectual property
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-intellectual-property" className="options-container" id="intellectual_property">
            <div className="js-auto-height-inner">
              <label htmlFor="intellectual_property-have-intellectual-property">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-have-intellectual-property" defaultValue="have-intellectual-property" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Have intellectual property" aria-controls="js-search-results-info" />
                Have intellectual property
              </label>
              <label htmlFor="intellectual_property-copyright">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-copyright" defaultValue="copyright" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Copyright" aria-controls="js-search-results-info" />
                Copyright
              </label>
              <label htmlFor="intellectual_property-trademarks">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-trademarks" defaultValue="trademarks" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Trademarks" aria-controls="js-search-results-info" />
                Trademarks
              </label>
              <label htmlFor="intellectual_property-designs">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-designs" defaultValue="designs" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Designs" aria-controls="js-search-results-info" />
                Designs
              </label>
              <label htmlFor="intellectual_property-patents">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-patents" defaultValue="patents" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Patents" aria-controls="js-search-results-info" />
                Patents
              </label>
              <label htmlFor="intellectual_property-exhaustion-of-rights">
                <input type="checkbox" name="intellectual_property[]" id="intellectual_property-exhaustion-of-rights" defaultValue="exhaustion-of-rights" data-track-category="filterClicked" data-track-action="Intellectual property" data-track-label="Exhaustion of rights" aria-controls="js-search-results-info" />
                Exhaustion of rights
              </label>
            </div>
          </div>
        </div>
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="receiving_eu_funding">
            <div className="option-select-label" id="option-select-title-receiving-eu-funding">
              Receiving EU funding
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-receiving-eu-funding" className="options-container" id="receiving_eu_funding">
            <div className="js-auto-height-inner">
              <label htmlFor="receiving_eu_funding-horizon-2020">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-horizon-2020" defaultValue="horizon-2020" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="Horizon 2020" aria-controls="js-search-results-info" />
                Horizon 2020
              </label>
              <label htmlFor="receiving_eu_funding-cosme">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-cosme" defaultValue="cosme" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="COSME" aria-controls="js-search-results-info" />
                COSME
              </label>
              <label htmlFor="receiving_eu_funding-european-investment-bank-eib">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-european-investment-bank-eib" defaultValue="european-investment-bank-eib" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="European Investment Bank (EIB)" aria-controls="js-search-results-info" />
                European Investment Bank (EIB)
              </label>
              <label htmlFor="receiving_eu_funding-european-structural-fund-esf">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-european-structural-fund-esf" defaultValue="european-structural-fund-esf" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="European Structural Fund (ESF)" aria-controls="js-search-results-info" />
                European Structural Fund (ESF)
              </label>
              <label htmlFor="receiving_eu_funding-eurdf">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-eurdf" defaultValue="eurdf" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="EURDF" aria-controls="js-search-results-info" />
                EURDF
              </label>
              <label htmlFor="receiving_eu_funding-etcf">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-etcf" defaultValue="etcf" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="ETCF" aria-controls="js-search-results-info" />
                ETCF
              </label>
              <label htmlFor="receiving_eu_funding-esc">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-esc" defaultValue="esc" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="ESC" aria-controls="js-search-results-info" />
                ESC
              </label>
              <label htmlFor="receiving_eu_funding-ecp">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-ecp" defaultValue="ecp" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="ECP" aria-controls="js-search-results-info" />
                ECP
              </label>
              <label htmlFor="receiving_eu_funding-etf">
                <input type="checkbox" name="receiving_eu_funding[]" id="receiving_eu_funding-etf" defaultValue="etf" data-track-category="filterClicked" data-track-action="Receiving EU funding" data-track-label="ETF" aria-controls="js-search-results-info" />
                ETF
              </label>
            </div>
          </div>
        </div>
        <div className="app-c-option-select js-collapsible js-closed" data-module="track-click" data-closed-on-load="true" data-input-aria-controls="js-search-results-info">
          <button className="js-container-head" type="button" aria-expanded="false" aria-controls="public_sector_procurement">
            <div className="option-select-label" id="option-select-title-public-sector-procurement">
              Public sector procurement
            </div>
            <div className="js-selected-counter" /></button>
          <div role="group" aria-labelledby="option-select-title-public-sector-procurement" className="options-container" id="public_sector_procurement">
            <div className="js-auto-height-inner">
              <label htmlFor="public_sector_procurement-civil-government-contracts">
                <input type="checkbox" name="public_sector_procurement[]" id="public_sector_procurement-civil-government-contracts" defaultValue="civil-government-contracts" data-track-category="filterClicked" data-track-action="Public sector procurement" data-track-label="Civil government contracts" aria-controls="js-search-results-info" />
                Civil government contracts
              </label>
              <label htmlFor="public_sector_procurement-defence-contracts">
                <input type="checkbox" name="public_sector_procurement[]" id="public_sector_procurement-defence-contracts" defaultValue="defence-contracts" data-track-category="filterClicked" data-track-action="Public sector procurement" data-track-label="Defence contracts" aria-controls="js-search-results-info" />
                Defence contracts
              </label>
            </div>
          </div>
        </div>
        <input type="submit" defaultValue="Filter results" className="button js-live-search-fallback" />
      </form>
        </div>
      </div>
    );
  }
}

export default App;
