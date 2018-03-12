import * as React from 'react'
import router from 'umi/router'
import { StickyContainer, Sticky } from 'react-sticky'
import { SearchBar, Grid, ListView } from 'antd-mobile'
import * as styles from './pages.less'

export default class extends React.Component {
    constructor(props) {
        super(props)
        if(window.location.pathname.indexOf('/home') < 0) {
            router.replace('./home')
            return
        }
    }

    state = {
        address: '当前地址',
        coords: {},
        rank_id: '',
        isLoading: false,
    }

    getImage(hash) {
        const path = hash[0] + '/' + hash.substr(1, 2) + '/' +  hash.substr(3)
        let type = 'jpeg'
        if(path.indexOf('png') > -1) {
            type = 'png'
        }
        return `http://fuss10.elemecdn.com/${path}.${type}`
    }

    getTypeData = () => {
        try {
            return this.state.header[0].entries.map(type => ({
                icon: this.getImage(type.image_hash),
                text: type.name
            }))
        } catch (error) {
            return []
        }
    }

    render () {
        const { address } = this.state
        return (
            <div className={styles.home}>
                <header className={styles.header}>
                    <div>
                        <svg viewBox="0 0 26 31" id="location" width="28px" height="34px"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                        &nbsp;
                        {address}
                    </div>
                </header>
                <StickyContainer>
                    <Sticky>
                        {
                            ({ style }) => (
                                <div style={{ ...style, zIndex, height: '1.2rem', overflow: 'hidden' }}>
                                    <SearchBar placeholder="搜索商家、商品名称" className={styles.search} onSubmit={this.onSearch} />
                                </div>
                            )
                        }
                    </Sticky>
                    <section className={styles.toptoon}>
                        <img src='https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d5b531623934png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/' alt='ad' />
                    </section>
                    <Grid className={styles.grid} data={this.getTypeData()} columnNum={5} carouselMaxRow={2} hasLine={false}
                        activeStyle={false} isCarousel onClick={_el => console.log(_el)}
                        renderItem={(item) => (
                            <div className={styles.typeItem}>
                                <div><image src={item.icon} alt={item.text} /></div>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        )}
                    />
                    <div className={styles.sep}>
                        <div className={styles.seph}></div>
                        推荐商家
                        <div className={styles.seph}></div>
                    </div>
                    <ListView 
                        dataSource={this.dataSource}
                        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>{this.state.isLoading ? '加载中...' : '暂无更多' }</div>)}
                        renderRow={this.renderRow}
                        pageSize={4}
                        useBodyScroll
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </StickyContainer>
            </div>
        )
    }
}