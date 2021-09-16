import React from 'react';
import _ from 'lodash';
import { Table, Button } from 'antd';
import './style.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tourLists: []
    }
  }

  componentDidMount() {
    this.props.touristList.map(tour => {
      tour.wishList = false
    });
    this.setState({ tourLists: this.props.touristList })
  }

  addToWishList = (tour) => {
    tour.wishList = true;
    this.resort()
  };

  deleteFromWishList = (tour) => {
    tour.wishList = false;
    this.resort();
  };

  resort = () => {
    let tours = _.orderBy(this.state.tourLists, ['wishList'], ['desc']);
    this.setState({ tourLists: tours })
  };

  render() {
    const columns = [
      {
        key: 'id',
        dataIndex: 'id',
        title: 'ID'
      },
      {
        key: 'title',
        dataIndex: 'title',
        title: 'Title'
      },
      {
        key: 'location',
        dataIndex: 'location',
        title: 'Location'
      },
      {
        key: 'time',
        dataIndex: 'time',
        title: 'Time',
        render: (text, record) => {
          return <p>{new Date(record.date).toDateString()}</p>
        }
      }
    ];
    return (
      <div className={'home-container'}>
        <p className={'title'}>Travel Desk Detail View</p>
        <Table
          columns={columns}
          expandedRowRender={
            record => {
              return (
                <p style={{ margin: 0 }}>
                  {record.description}
                  {record.wishList && (
                    <Button type={'default'} onClick={() => this.deleteFromWishList(record)}>
                      {'Remove from wishlist'}
                    </Button>
                  )}
                  {!record.wishList && (
                    <Button type={'default'} onClick={() => this.addToWishList(record)}>
                      {'Add to wishlist'}
                    </Button>
                  )}

                </p>
              )
            }
          }
          dataSource={this.state.tourLists}
          pagination={false}
          bordered={true}
          rowKey={'id'}
          rowClassName={(record, index) => record.wishList ? 'wish-list' : 'tourist'}
        />
      </div>
    )
  }
}

export default HomePage;