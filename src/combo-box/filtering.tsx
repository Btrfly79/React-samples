/**
 * ComboBox Filtering Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ComboBoxComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { SampleBase } from '../common/sample-base';
import './filtering.css';

export class Filtering extends SampleBase<{}, {}> {

  private listObj: ComboBoxComponent;
  //define the filtering data
  private searchData: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' }
  ];
  // maps the appropriate column to fields property
  private fields: Object = { text: 'Name', value: 'Code' };
  // filtering event handler to filter a Country
  public onFiltering = (e: FilteringEventArgs) => {
    let query: Query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.searchData, query);
  };

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div id='filtering'>
            <ComboBoxComponent id="country" ref={(ComboBox) => { this.listObj = ComboBox }} dataSource={this.searchData} filtering={this.onFiltering.bind(this)} allowFiltering={true} fields={this.fields} placeholder="Select a country" popupHeight="270px" />
          </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the filtering functionalities of the ComboBox. Type a character in ComboBox element and choose an item from the filtered list based on the typed characters.</p>
        </div>
            
        <div id="description">
            <p>The ComboBox has built-in support to filter the data source when <code>allowFiltering</code> is enabled. It performs
                when characters are typed in the search box. In <code>filtering</code> event, you can filter down the data source and
                return the resulted data to ComboBox via <code>updateData</code> method to display its list items.</p>
            <p>This sample illustrates that, query the data source and pass the resulted data to ComboBox through the <code>updateData</code> method in <code>filtering</code> event.</p>
            <p> More information on the filtering feature configuration can be found in the
                <a href="http://ej2.syncfusion.com/react/documentation/combo-box/filtering.html" target="_blank"> documentation section</a>.
            </p>
        </div>
      </div>
    );
  }
}