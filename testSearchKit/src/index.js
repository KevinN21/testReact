import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import './index.css'

import {
    SearchkitManager,
    SearchkitProvider,
    Hits,
    SearchBox,
    Layout,
    TopBar,
    LayoutBody,
    SideBar,
    // HierarchicalMenuFilter,
    NumericRefinementListFilter,
    RangeFilter,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    HitsStats,
    SelectedFilters,
    ResetFilters,
    NoHits,
    Pagination,
    InitialLoader,
} from "searchkit";

const qks = new SearchkitManager("http://optimus2.qks.io:9200/quarksds/substance/");
// const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/")

const HitItem = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
        <p className={props.bemBlocks.item("formula")}>{props.result._source.formula}</p>
            <img className={props.bemBlocks.item("icon")} role="presentation"  src={"data:image/svg+xml;utf8," + props.result._source.icon}/>
        <p className={props.bemBlocks.item("name")} dangerouslySetInnerHTML={{__html:_.get(props.result,"highlight.name",props.result._source.name.fr)}}></p>
  </div>
)


class App extends React.Component {

    render() {
        return (

            <SearchkitProvider searchkit={qks}>
                <Layout>
                    <TopBar>
                          <div className="my-logo">Quarks DS</div>
                          <SearchBox
                            translations={{"searchbox.placeholder":"Search"}}
                            searchOnChange={true}
                            autoFocus={true}/>
                        </TopBar>

                    <LayoutBody>
                        <SideBar>
                            <NumericRefinementListFilter id="onu" title="ONU " field="onu" options={[
                            {title:"All"},
                            {title:"up to 1000", from:0, to:1001},
                            {title:"1001 to 2000", from:1001, to:2001},
                            {title:"2001 to 3000", from:2001, to:3001},
                            {title:"3001 to 4000", from:3001, to:4001},
                            {title:"4001 to 5000", from:4001, to:5001}
                          ]}/>
                          <RangeFilter field="onu" id="onu_range" min={0} max={5000} showHistogram={true} title="ONU RANGE "/>
                        </SideBar>

                        <LayoutResults>

                            <ActionBar>
                                <ActionBarRow>
                                    <HitsStats/>
                                    <SelectedFilters/>
                                    <ResetFilters/>
                                </ActionBarRow>
                            </ActionBar>

                            <Hits hitsPerPage={12} highlightFields={["name","formula", "cas"]} sourceFilter={["name", "icon", "formula", "cas"]}
                               mod="sk-hits-grid" itemComponent={HitItem}/>
                            <InitialLoader />
                            <Pagination
                                    showLast={true}
                                    showNumbers={true}
                                    pageScope={1} />
                            <NoHits/>
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        )
    }
};

ReactDOM.render( <App/> , document.getElementById('root'));
