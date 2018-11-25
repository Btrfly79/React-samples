import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PropertyPane } from '../common/property-pane';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from '../common/sample-base';
import './tab.component.css';

export class Responsive extends SampleBase<{}, {}> {
    private tabObj: TabComponent;

    // Change event funtion for DropDownList component   
    public changeOverflowMode(e: ChangeEventArgs): void {
        let placement: string = (document.getElementById('mode') as HTMLSelectElement).value;
        if (placement === 'Popup') {
            this.tabObj.overflowMode = 'Popup';
        } else {
            this.tabObj.overflowMode = 'Scrollable';
        }
        this.tabObj.dataBind();
    }

    // Mapping DropDownList dataSource property
    private mData: { [key: string]: Object }[] = [
        { 'value': 'scrollable', 'text': 'Scrollable' }, { 'value': 'popup', 'text': 'Popup' }
    ];

    // Mapping DropDownList fields property
    private fields: object = { text: 'text', value: 'value' };

    // Mapping DropDownList value property
    private mVal: string = 'scrollable';
    render() {
        let headertext: any;
        // Mapping Tab items Header property
        headertext = [{ text: "HTML" }, { text: "C Sharp(C#)" }, { text: "Java" }, { text: "VB.Net" }, { text: "Xamarin" },
        { text: "ASP.NET" }, { text: "ASP.NET MVC" }, { text: "JavaScript" }];
        function tabContent1() {
            return (
                <div>
                    HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
            </div>)
        }
        function tabContent2() {
            return (
                <div>
                    C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.
            </div>)
        }
        function tabContent3() {
            return (
                <div>
                    Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-mobile phones to platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to provide many features of native applications and can be embedded in HTML pages.
            </div>)
        }
        function tabContent4() {
            return (
                <div>
                    The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.
            </div>)
        }
        function tabContent5() {
            return (
                <div>
                    Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World as of May 2015.
            </div>)
        }
        function tabContent6() {
            return (
                <div>
                    ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft's Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ASP.NET components to process SOAP messages.
            </div>)
        }
        function tabContent7() {
            return (
                <div>
                    The ASP.NET MVC is a web application framework developed by Microsoft, which implements the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6. The project is called ASP.NET vNext.
            </div>)
        }
        function tabContent8() {
            return (
                <div>
                    JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in both game development and the creation of desktop applications.
            </div>)
        }
        return (
            <div className='control-pane'>
                <div className='control-section tab-control-section row'>
                    <div className='col-lg-8 adaptive'>
                        {/* Render the Tab Component */}
                        <TabComponent ref={(tab) => { this.tabObj = tab }} heightAdjustMode='Auto'>
                            <TabItemsDirective>
                                <TabItemDirective header={headertext[0]}
                                    content={tabContent1} />

                                <TabItemDirective header={headertext[1]}
                                    content={tabContent2} />

                                <TabItemDirective header={headertext[2]}
                                    content={tabContent3} />

                                <TabItemDirective header={headertext[3]}
                                    content={tabContent4} />

                                <TabItemDirective header={headertext[4]}
                                    content={tabContent5} />

                                <TabItemDirective header={headertext[5]}
                                    content={tabContent6} />

                                <TabItemDirective header={headertext[6]}
                                    content={tabContent7} />

                                <TabItemDirective header={headertext[7]}
                                    content={tabContent8} />
                            </TabItemsDirective>
                        </TabComponent>
                    </div>
                    <div className='col-lg-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table'>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <div>Mode</div>
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <div>
                                            {/* Render the DropDownList Component */}
                                            <DropDownListComponent id='mode' width={'90%'} dataSource={this.mData} fields={this.fields} value={this.mVal}
                                                change={this.changeOverflowMode.bind(this)} />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample demonstrates both <code>scrollable</code> and <code>popup</code> modes of the <code>Tab</code>. Select option from down-down to change the responsive option in property panel.
                </p>
                </div>
                <div id="description">
                    <p>
                        The <code>Tab</code> is adaptable to the available space when the tab items exceed the view space.
                    </p>
                    <p>
                        You can assign overflowMode property value as <code>Scrollable / Popup</code>. By default scrollable mode of
                        tab is enabled when tab item exceeds the view range.
                        In this sample, users can change the <code>overflowMode</code> by selecting the dropdown options.
                    </p>
                    <p>
                        More information about Tab can be found in this
                        <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/tab/getting-started.html">  documentation
                        </a> section.
                    </p>
                </div>
            </div>
        );
    }
}