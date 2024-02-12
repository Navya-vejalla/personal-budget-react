import React from 'react';

function HomePage() {
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
    
            <div className="text-box">
                <h2>Chart</h2>
                <section>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </section>
                <section className="advanced-chart-area center">
                    <h1>Advanced Budget Chart</h1>
                    <button className="randomize">Refresh</button>
                </section>
            </div>
    
        </article>
    </section>

</main>
  );
}

export default HomePage;
