import * as React from "react";
import * as ReactDOM from "react-dom";
import {Col, Row} from "react-bootstrap";
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
    NoHits
} from "searchkit";

const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/")

class App extends React.Component {

    render() {
        return (

            <SearchkitProvider searchkit={searchkit}>
                <Layout>
                    <TopBar>
                                <SearchBox autofocus={true} searchOnChange={true} placeholder={'coucou'}/>
                    </TopBar>
                    <LayoutBody>
                        <SideBar>
                            <Row>
                                <Col className={'test2'} xs={12} md={8} sm={6}>
                                    <HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories"/>
                                </Col>
                                <Col className={'test'} xs={12} md={4} sm={6}>
                                    <RefinementListFilter id="actors" title="actors" field="actors.raw" operator="aw" size={10}/>
                                </Col>
                            </Row>
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
                            <Row>
                                <Col className="test3" md={12}>
                                    <Hits mod="sk-hits-grid" hitsPerPage={40} itemComponent={MovieHitsGridItem}/>
                                </Col>
                                    <NoHits/>
                            </Row>
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        )
    }
};

ReactDOM.render(
    <App/>, document.body);
