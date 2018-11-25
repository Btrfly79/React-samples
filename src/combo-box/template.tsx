/**
 * ComboBox Template Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from '../common/sample-base';
import './template.css';

export class Templates extends SampleBase<{}, {}> {

  private listObj: ComboBoxComponent;
  // define the JSON of employees data
  private employeesData: { [key: string]: Object }[] = [
    { Name: 'Andrew Fuller', Eimg: '7', Designation: 'Team Lead', Country: 'England' },
    { Name: 'Anne Dodsworth', Eimg: '1', Designation: 'Developer', Country: 'USA' },
    { Name: 'Janet Leverling', Eimg: '3', Designation: 'HR', Country: 'USA' },
    { Name: 'Laura Callahan', Eimg: '2', Designation: 'Product Manager', Country: 'USA' },
    { Name: 'Margaret Peacock', Eimg: '6', Designation: 'Developer', Country: 'USA' },
    { Name: 'Michael Suyama', Eimg: '9', Designation: 'Team Lead', Country: 'USA' },
    { Name: 'Nancy Davolio', Eimg: '4', Designation: 'Product Manager', Country: 'USA' },
    { Name: 'Robert King', Eimg: '8', Designation: 'Developer ', Country: 'England' },
    { Name: 'Steven Buchanan', Eimg: '10', Designation: 'CEO', Country: 'England' }
  ];
  // maps the appropriate column to fields property
  private fields: object = { text: 'Name', value: 'Eimg' };
  //set the value to header template
  private headerTemplate(data: any): JSX.Element {
    return (
      <div className="header"> <span>Photo</span> <span className="columnHeader">Employee Info</span></div>
        );
    }
    //set the value to item template
    private itemTemplate(data: any): JSX.Element {
      return (
        <div><img className="empImage" src={"src/combo-box/Employees/"+`${data.Eimg}`+".png"} alt="employee"/>
        <div className="ename"> {data.Name} </div><div className="job"> {data.Designation} </div></div>
          );
      }

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div id='template'>
            <ComboBoxComponent id="employees" dataSource={this.employeesData} fields={this.fields} placeholder="Select an employee" itemTemplate={this.itemTemplate} headerTemplate={this.headerTemplate} popupHeight="270px" />
          </div>
        </div>
        <div id="action-description">    
            <p>This sample demonstrates the template functionalities of the ComboBox. Type a character in the ComboBox element or click on the drodown icon to choose an item from the customized list.</p>
        </div>
        <div id="description">
            <p>The ComboBox has been provided with several options to customize each list items, group title, header and footer elements.
            </p>
        
            <p>This sample uses the following list of templates in ComboBox</p>
            <ul>
                <li><code>ItemTemplate</code> - To customize the list item's content.</li>
                <li><code>HeaderTemplate</code> - To customize the header element.</li>
            </ul>
            <p> More information on the template feature configuration can be found in the
                <a href="http://ej2.syncfusion.com/react/documentation/combo-box/templates.html" target="_blank"> documentation section</a>.
            </p>
        </div>
      </div>
    );
  }
}