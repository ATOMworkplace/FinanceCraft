<h1>FinanceCraft</h1>

<p>
FinanceCraft is a comprehensive stock market analysis and prediction project. It blends advanced technical indicators with a machine learning Random Forest Classifier to achieve high accuracy (over 80%) in predicting whether a stock's next-day closing price will be higher or lower than today's.
</p>

<h2>Overview</h2>
<p>
This project demonstrates how to:
</p>
<ul>
  <li><strong>Gather historical stock data</strong> (using <code>yfinance</code>)</li>
  <li><strong>Compute advanced technical indicators</strong> (e.g. RSI, Bollinger Bands, ADX, etc.)</li>
  <li><strong>Construct a classification target</strong> (Up or Down) for the next trading day</li>
  <li><strong>Train and tune a Random Forest Classifier</strong> to predict upward vs. downward price movement</li>
  <li><strong>Visualize results</strong> (price/indicators, cumulative returns, etc.)</li>
  <li><strong>Implement a dynamic loading bar</strong> (via <code>ipywidgets</code>) to track progress</li>
  <li><strong>Display a real-time stock snapshot</strong> for user reference</li>
</ul>

<h2>Key Algorithms & Indicators</h2>

<h3>Technical Indicators</h3>
<ul>
  <li><strong>RSI (Relative Strength Index):</strong> Measures momentum by comparing recent gains and losses. If RSI is above 70, the market is often considered overbought; below 30, oversold.</li>
  <li><strong>Bollinger Bands:</strong> Uses a moving average and standard deviation to form upper and lower bands, indicating volatility and potential overbought/oversold levels.</li>
  <li><strong>MACD (Moving Average Convergence Divergence):</strong> Tracks momentum via difference between two EMAs and a signal line. Crossovers can hint at changing trends.</li>
  <li><strong>ADX (Average Directional Index):</strong> Gauges trend strength by comparing positive and negative directional movements.</li>
  <li><strong>ATR (Average True Range):</strong> Measures market volatility using daily price range expansions.</li>
  <li><strong>Stochastic Oscillator:</strong> Compares a closing price to a price range over a set period, indicating potential reversals.</li>
  <li><strong>Williams %R:</strong> Like Stochastic, measures overbought/oversold conditions.</li>
  <li><strong>OBV (On-Balance Volume):</strong> Assesses volume flow to gauge buying/selling pressure.</li>
</ul>

<p>
These indicators help capture various <em>momentum</em>, <em>trend</em>, and <em>volatility</em> signals. Combining them provides a broader perspective of market conditions, improving the model’s predictive power for price direction.
</p>

<h3>Random Forest Classifier</h3>
<ul>
  <li><strong>Ensemble of Decision Trees:</strong> Random Forest trains multiple decision trees and averages their outputs, reducing overfitting and variance.</li>
  <li><strong>Bootstrap Sampling & Random Subspace:</strong> Each tree is trained on a random subset of data (rows) and features (columns), ensuring diversity among trees.</li>
  <li><strong>Majority Voting for Classification:</strong> Each tree votes on whether the price will go up or down. The final prediction is the majority vote.</li>
  <li><strong>Why It Helps:</strong> Ensemble methods typically outperform single trees, especially on noisy financial data. They’re also robust to correlated indicators and missing data.</li>
</ul>

<p>
By combining <strong>advanced technical indicators</strong> (for rich feature engineering) with the <strong>Random Forest</strong> classification approach, FinanceCraft can capture diverse market signals and reduce noise, aiming for over 80% classification accuracy on the next-day price direction.
</p>

<h2>Implementation</h2>
<p>
Below is the full code in one cell. You can copy/paste it as a standalone <code>README.md</code> or Python/Notebook cell. It uses the <strong>RandomForestClassifier</strong> to classify the next day’s close as higher or lower, with a dynamic loading bar to track progress, plus real-time stock snapshots for user reference.
</p>
<h2>How the Code Works</h2>
<ol>
  <li><strong>Data Fetching:</strong> Uses <code>yfinance</code> to get 5 years of historical data for <code>AAPL</code>.</li>
  <li><strong>Indicator Computation:</strong> Calculates RSI, Bollinger Bands, MACD, etc., capturing different market signals (momentum, volatility, etc.).</li>
  <li><strong>Classification Target:</strong> Labels each row with <code>1</code> if the next day’s close is higher, else <code>0</code>.</li>
  <li><strong>Feature Preparation:</strong> Merges multiple signals into features, creating an array <code>X</code> for the model.</li>
  <li><strong>Random Forest Classifier:</strong> 
    <ul>
      <li>Uses <code>GridSearchCV</code> with <code>TimeSeriesSplit</code> to tune hyperparameters (e.g., <code>max_depth, n_estimators</code>).</li>
      <li>Aims to exceed <strong>80% accuracy</strong> by leveraging ensemble learning on multiple diverse features.</li>
    </ul>
  </li>
  <li><strong>Backtesting Logic:</strong> 
    <ul>
      <li>Transforms predicted classes into trading signals (long if up, short if down).</li>
      <li>Combines <code>CombinedSignal</code> with model predictions to refine trades.</li>
      <li>Computes daily returns and cumulative returns to illustrate performance.</li>
    </ul>
  </li>
  <li><strong>Visualization & Real-Time Snapshot:</strong> 
    <ul>
      <li>Plots Bollinger, MACD, RSI for a broad technical overview.</li>
      <li>Displays a real-time 1-month snapshot of the same ticker’s close price.</li>
    </ul>
  </li>
</ol>

<h2>Conclusion</h2>
<p>
FinanceCraft showcases how combining multiple <strong>technical indicators</strong> with a well-tuned <strong>Random Forest Classifier</strong> can yield higher accuracy (our target: &gt;80%) for predicting next-day price movement. It also demonstrates fundamental backtesting logic, allowing you to compare a simple strategy’s returns against the general market.
</p>

<p>
<strong>Note:</strong> Real-world performance will vary with market conditions, data availability, transaction costs, and domain-specific constraints. Ongoing refinement (feature engineering, deeper hyperparameter optimization, or ensemble modeling) can further boost accuracy.
</p>
