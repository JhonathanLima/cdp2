import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContet from '../common/tab/tabContent'

import {init, create, update, remove} from './estoqueActions'

import List from './estoqueListNovo'
import Form from './estoqueForm'

class Estoque extends Component {

    componentWillMount() {
        this.props.init()
    }

    render(){
        return(
            <div> 
                <ContentHeader title= 'Estoque' small='Controle'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContet id= 'tabList'>
                                <List />
                            </TabContet>
                            <TabContet id= 'tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitLabel= 'Incluir' submitClass ='primary'/>
                            </TabContet>
                            <TabContet id= 'tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel= 'Alterar' submitClass ='info'/>
                            </TabContet>
                            <TabContet id= 'tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel= 'Excluir' submitClass ='danger'/>
                            </TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
   init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Estoque)