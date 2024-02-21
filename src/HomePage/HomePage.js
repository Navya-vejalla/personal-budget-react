import React from 'react';
import BudgetChart from '../BudgetChart/BudgetChart';
import D3BudgetChart from '../D3BudgetChart/D3BudgetChart';
import axios from 'axios';

export default class HomePage extends React.Component {
    state = {
        myMonthlyBudget: []
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/budget`)
        .then(response => { 
            this.myMonthlyBudget = 
            this.setState({
                myMonthlyBudget: response.data.myMonthlyBudget
            })
        })
    }
    render(){
  return (
    <main>
    <section className="container center">
        <article className="page-area">

            <div className="text-box">
                <h2>Stay on Track with your budget</h2>
                <p>Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that! Manage your personal budget effectively with our app.</p>
            </div>
    
            <div className="text-box">
                <h2>Alerts on over the budget</h2>
                <p>What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.</p>
            </div>
    
            <div className="text-box">
                <h2>Results</h2>
                <p>People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they live happier lives... since they expend without guilt or fear... because they know it is all good and accounted for.</p>
            </div>
    
        </article>
    </section>
    <BudgetChart />
    <D3BudgetChart/>

</main>
  );
}
}
