import React, { PureComponent } from 'react'
import { Card, Tabs, DatePicker, Radio, Icon, Tooltip } from 'antd'
import styles from './Analysis.module.less'

const smallCardBodyStyle = { padding: '12px 12px 8px 12px' }

class Analysis extends PureComponent {
  render() {
    return (
      <>
        <div className={styles.smallCardList}>
          <Card bodyStyle={smallCardBodyStyle}>
            <div className={styles.smallCardTitle}>
              <span>总销售额</span>
              <Tooltip title="总销售额">
                <Icon type="info-circle" />
              </Tooltip>
            </div>
            <div className={styles.smallCardData}>￥126,560</div>
            <div className={styles.smallCardContent}>
              周同比
              <span className={styles.smallCardPercent}>
                <span className={styles.mainTextColor}>12%</span>
                <Icon type="caret-up" className={styles.successColor} />
              </span>
              日同比
              <span className={styles.smallCardPercent}>
                <span className={styles.mainTextColor}>11%</span>
                <Icon type="caret-down" className={styles.errorColor} />
              </span>
            </div>
            <div className={styles.smallCardFooter}>
              日销售额<span className={styles.mainTextColor}>￥12,211</span>
            </div>
          </Card>
        </div>
      </>
    )
  }
}

export default Analysis
