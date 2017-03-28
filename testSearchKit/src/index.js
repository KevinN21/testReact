import React from "react";
import ReactDOM from "react-dom";
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
    HierarchicalMenuFilter,
    RefinementListFilter,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    HitsStats,
    SelectedFilters,
    ResetFilters,
    MovieHitsGridItem,
    NoHits,
    Pagination,
} from "searchkit";

// const qks = new SearchkitManager("http://optimus2.qks.io:9200/quarksds/substance/");
const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/")

class App extends React.Component {

    render() {
        return (

            <SearchkitProvider searchkit={searchkit}>
                <Layout>
                    <TopBar>
                          <div className="my-logo" >Quarks DS</div>
                          <SearchBox
                            translations={{"searchbox.placeholder":"Search substances"}}
                            queryOptions={{"minimum_should_match":"70%"}}
                            autofocus={true}
                            searchOnChange={true} />
                    </TopBar>

                    <LayoutBody>
                        <SideBar>
                            <HierarchicalMenuFilter
                              fields={["type.raw", "genres.raw"]}
                              title="Categories "
                              id="categories" />
                            <RefinementListFilter
                              id="actors"
                              title="Actors "
                              field="actors.raw"
                              operator="AND"
                              size={10} />
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
                                <Hits mod="sk-hits-grid" hitsPerPage={20} itemComponent={MovieHitsGridItem}/>
                                <Pagination
                                    pageScope={1}
                                    showNumbers={true}
                                    showText={true}
                                    showLast={true}
                                    translations={('pagination.previous,pagination.next')}/>
                                <NoHits/>
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
