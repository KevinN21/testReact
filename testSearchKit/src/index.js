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
    RefinementListFilter,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    HitsStats,
    SelectedFilters,
    ResetFilters,
    NoHits,
    Pagination,
    // InitialLoader,
} from "searchkit";

const qks = new SearchkitManager("http://optimus2.qks.io:9200/quarksds/substance/");
// const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/")

const HitItem = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
        <p className={props.bemBlocks.item("formula")}>{props.result._source.formula}</p>
            <img className={props.bemBlocks.item("icon")} role="presentation"  src={"data:image/svg+xml;utf8," + props.result._source.icon}/>
        <p className={props.bemBlocks.item("name")} dangerouslySetInnerHTML={{__html:_.get(props.result,"highlight.name",props.result._source.name.en)}}></p>
  </div>
)

// const RefinementOption = (props) => (
//   <div className={props.bemBlocks.option().state({selected:props.selected}).mix(props.bemBlocks.container("item"))} onClick={props.onClick}>
//     <div className={props.bemBlocks.option("text")}>{props.result._source.cas}</div>
//     <div className={props.bemBlocks.option("count")}>{props.result._source.name}</div>
//   </div>
// )
// const InitialLoaderComponent = (props) => (
//   <div className="test">
//       <p>Loading please wait...</p>
//   </div>
// )

class App extends React.Component {

    render() {
        return (

            <SearchkitProvider searchkit={qks}>
                <Layout>
                    <TopBar>
                          <div className="my-logo">Quarks DS</div>
                          <SearchBox
                            translations={{"searchbox.placeholder":"Search"}}
                            queryOptions={{"minimum_should_match":"70%"}}
                            searchOnChange={true}
                            autoFocus={true}/>
                    </TopBar>

                    <LayoutBody>
                        <SideBar>
                            {/* <HierarchicalMenuFilter
                              fields={"cas"}
                              title="CAS Number "
                              id="casnum" /> */}
                             <RefinementListFilter
                                 field='name'
                                 tilte='Cas Number'
                                 id='casNum'
                                //  itemComponent="RefinementOption"
                         />
                        </SideBar>

                        <LayoutResults>
                            <ActionBar>

                                <ActionBarRow>
                                    <HitsStats/>
                                </ActionBarRow>

                                <ActionBarRow>
                                    <SelectedFilters/>
                                    <ResetFilters/>
                                </ActionBarRow>

                            </ActionBar>
                            <Hits hitsPerPage={12} highlightFields={["name"]} sourceFilter={["name", "icon", "formula"]}
                               mod="sk-hits-grid" itemComponent={HitItem}/>
                            {/* <InitialLoader component={InitialLoaderComponent}/> */}
                            <Pagination
                                    showLast={true}
                                    showNumbers={true}
                                    pageScope={1}
                                />
                                <NoHits/>
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        )
    }
};

ReactDOM.render( <App/> , document.getElementById('root'));
