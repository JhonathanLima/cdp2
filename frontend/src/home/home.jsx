import React, {Component}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary } from './homeActions'
import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import ValueBoxHome from '../common/widget/valueBoxHome'
import Row from '../common/layout/row'

class Home extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        
        const { nomeCliente, cidadeCliente,dataPedido } = this.props.summary
        console.log(this.props.summary)
        return (
            <div>
                <ContentHeader title='CVC sistemas' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                    </Row>
                    <Row>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                        <ValueBoxHome cols='12 4' color='blue' icon='cart-plus'
                            nome={` ${nomeCliente}`} cidade={` ${cidadeCliente}`} data={` ${dataPedido}`}/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.home.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)