import React from 'react';
import '../App.css';
import SearchBar from './FarmerSearchBar';

//Format crop protection spend into USD currency format
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});  

class DisplayTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        fetch("./data.json").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list:data.data
            })
        })
    }
    
    render() {

        let tb_data = this.state.list.map((item)=>{
            return (
                <tr key={item.id}>
                    <td width="25%">{item.farmer_name}</td>
                    <td width="10%">{item.city}</td>
                    <td width="35%">{item.state}</td>
                    <td width="15%" className="cp_spend">{dollarUS.format(item.cp_spend)}</td>
                    <td width="15%" className="seed_bags">{item.seed_purchases}</td>
                </tr>
            )
        })

        return (
            
            <div className="container">
                
                <SearchBar />

                    <table className="table">
                     <thead>
                            <tr>
                                <th>Farmer Name <img src="./down-arrow.png" width="15" height="15" alt="sort"></img></th>
                                <th>City</th>
                                <th>State</th>
                                <th className="cp_spend">Crop Protection Spend</th>
                                <th className="seed_bags">Seed (Bags)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
            </div>
                )
        }
}

export default DisplayTable;