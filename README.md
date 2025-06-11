<h1>FinanceCraft</h1>

<p>
FinanceCraft is an advanced stock market analysis and prediction project. It integrates a range of technical indicators with a Random Forest Classifier to forecast whether a stock's next day closing price will rise or fall.
</p>
<h2>Website</h2>

https://github.com/user-attachments/assets/5da45e23-c33b-43a0-8816-9a78e4926241

<h2>Overview</h2>
<p>
This project demonstrates how to:
</p>
<ul>
  <li><strong>Gather historical stock data</strong> (using <code>yfinance</code>)</li>
  <li><strong>Compute advanced technical indicators</strong> (e.g., RSI, Bollinger Bands, MACD)</li>
  <li><strong>Construct a classification target</strong> (Up or Down) for the next trading day</li>
  <li><strong>Train and tune a Random Forest Classifier</strong> to predict price movement direction</li>
  <li><strong>Visualize results</strong> (price/indicators, cumulative returns, etc.)</li>
  <li><strong>Implement a dynamic loading bar</strong> (via <code>ipywidgets</code>) to track progress</li>
  <li><strong>Display a real-time stock snapshot</strong> for user reference</li>
</ul>

<h2>Key Algorithms & Indicators</h2>

<h3>Trading algorithms and Technical Indicators</h3>
<ul>
  <li><strong>RSI (Relative Strength Index):</strong> Measures momentum by comparing recent gains and losses. Indicates overbought or oversold conditions.</li>
  <li><strong>Bollinger Bands:</strong> Utilizes a moving average and standard deviation to form upper and lower bands, highlighting volatility and potential price extremes.</li>
  <li><strong>MACD (Moving Average Convergence Divergence):</strong> Tracks momentum through the difference between two EMAs and a signal line. Crossovers suggest trend changes.</li>
  <li><strong>ADX (Average Directional Index):</strong> Assesses trend strength by comparing positive and negative directional movements.</li>
  <li><strong>ATR (Average True Range):</strong> Measures market volatility based on daily price range expansions.</li>
  <li><strong>Stochastic Oscillator:</strong> Compares a closing price to a price range over a set period, signaling potential reversals.</li>
  <li><strong>Williams %R:</strong> Similar to Stochastic, it identifies overbought or oversold conditions.</li>
  <li><strong>OBV (On-Balance Volume):</strong> Evaluates volume flow to determine buying or selling pressure.</li>
</ul>

<p>
These indicators capture various <em>momentum</em>, <em>trend</em>, and <em>volatility</em> signals. Combining them provides a comprehensive view of market conditions, enhancing the model’s ability to predict price direction.
</p>

<h3>Random Forest Classifier</h3>
<ul>
  <li><strong>Ensemble of Decision Trees:</strong> Trains multiple decision trees and aggregates their outputs, reducing overfitting and variance.</li>
  <li><strong>Bootstrap Sampling & Random Subspace:</strong> Each tree is trained on a random subset of data and features, ensuring diversity among trees.</li>
  <li><strong>Majority Voting for Classification:</strong> Each tree votes on the price movement direction. The final prediction is based on the majority vote.</li>
  <li><strong>Advantages:</strong> Ensemble methods generally outperform single trees, especially with noisy financial data. They are also resilient to correlated indicators and missing data.</li>
</ul>

<p>
By combining <strong>advanced technical indicators</strong> (for comprehensive feature engineering) with the <strong>Random Forest</strong> classification approach, FinanceCraft effectively captures diverse market signals and mitigates noise, aiming to provide reliable predictions for next-day price movements.
</p>

<h2>Implementation</h2>
<p>
Below is the complete code in a single cell. You can copy and paste it as a standalone <code>README.md</code> or Python/Notebook cell. It employs the <strong>RandomForestClassifier</strong> to classify the next day’s close as higher or lower, incorporates a dynamic loading bar to monitor progress, and includes real-time stock snapshots for user reference.
</p>
<h2>How the Code Works</h2>
<ol>
  <li><strong>Data Fetching:</strong> Utilizes <code>yfinance</code> to retrieve 30 years of historical data for <code>AAPL</code>.</li>
  <li><strong>Indicator Computation:</strong> Calculates RSI, Bollinger Bands, MACD, and other indicators to capture various market signals (momentum, volatility, etc.).</li>
  <li><strong>Classification Target:</strong> Labels each entry with <code>1</code> if the next day’s close is higher, else <code>0</code>.</li>
  <li><strong>Feature Preparation:</strong> Integrates multiple signals into features, creating an array <code>X</code> for the model.</li>
  <li><strong>Random Forest Classifier:</strong> 
    <ul>
      <li>Uses <code>GridSearchCV</code> with <code>TimeSeriesSplit</code> to optimize hyperparameters (e.g., <code>max_depth, n_estimators</code>).</li>
      <li>Leverages ensemble learning on diverse features to enhance prediction reliability.</li>
    </ul>
  </li>
  <li><strong>Backtesting Logic:</strong> 
    <ul>
      <li>Transforms predicted classes into trading signals (long if up, short if down).</li>
      <li>Combines <code>CombinedSignal</code> with model predictions to refine trading decisions.</li>
      <li>Calculates daily returns and cumulative returns to assess strategy performance.</li>
    </ul>
  </li>
  <li><strong>Visualization & Real-Time Snapshot:</strong> 
    <ul>
      <li>Plots Bollinger Bands, MACD, RSI for a comprehensive technical overview.</li>
      <li>Displays a real-time 1-month snapshot of the ticker’s close price.</li>
    </ul>
  </li>
</ol>
<h2>Screenshots</h2>

![image](https://github.com/user-attachments/assets/80ee058f-1616-4637-8ed6-a0ece0d7a0a3)

![image](https://github.com/user-attachments/assets/6372b14f-e130-4969-a30b-0084fc81452a)

![image](https://github.com/user-attachments/assets/61bf6fae-bb06-4b5d-92ca-a95e5c6738d3)

![image](https://github.com/user-attachments/assets/4e95c857-3943-4551-8abe-26a6389e293b)

![image](https://github.com/user-attachments/assets/d3a25fea-e4a6-4d87-8be2-ca6e760c545f)

<h2>Conclusion</h2>
<p>
FinanceCraft demonstrates the effective integration of multiple <strong>trading algorithms and technical indicators</strong> with a well-tuned <strong>Random Forest Classifier</strong> to predict next-day price movements. It also incorporates fundamental backtesting logic, enabling comparison of the strategy’s returns against the broader market.
</p>

<p>
<strong>Note:</strong> Real-world performance can vary based on market conditions, data quality, transaction costs, and other factors. Continuous refinement through feature engineering, hyperparameter optimization, or advanced modeling techniques can further enhance prediction reliability.
</p>
