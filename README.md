<h1>FinanceCraft</h1>
<p>FinanceCraft is a comprehensive financial analysis and prediction tool that combines cutting-edge machine learning algorithms with intuitive web development to empower users with insights into stock market behavior.</p>

<h2>Overview</h2>
<p>In today's dynamic financial landscape, making informed investment decisions is crucial for success. FinanceCraft serves as your gateway to the world of stock market analysis and prediction. Leveraging advanced machine learning techniques and robust web development technologies, FinanceCraft provides users with personalized tools to forecast stock market trends and make well-informed investment choices.</p>

<h2>Key Features</h2>
<ul>
<li><strong>Machine Learning Algorithms:</strong> FinanceCraft harnesses the power of machine learning algorithms such as Random Forest, Support Vector Machine (SVM), and Linear Regression to analyze historical stock market data and predict future trends with high accuracy.</li>
<li><strong>Web Development:</strong> The core of FinanceCraft lies in its user-friendly web interface. Developed using HTML, CSS, JavaScript, Express.js, and Node.js, the website offers seamless navigation and interaction, providing users with an immersive experience.</li>
<li><strong>Data Integration:</strong> FinanceCraft integrates with APIs such as Alpha Vantage and Yahoo Finance to fetch real-time and historical stock market data. This data is then processed and analyzed to generate valuable insights for users.</li>
</ul>

<h2>Demo and Screenshots</h2>

https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/79f9cfea-9918-49b6-9e9e-6edd7c671fa8


https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/e16aa83e-6134-4529-9509-93ebbe6872dc


![1](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/f3b2ee69-f1d7-4616-887f-8fc15ac8aa4c)

![2](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/c2c72b18-aa3b-43de-8bb0-324ac3372c5f)

![3](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/300adc38-8549-4225-b2d9-14a397f3b9ca)

![4](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/3401e09d-aaf7-4978-b572-6c05dd8cb015)

![5](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/213afc3e-5ed5-488e-ba8d-b83d4b85bc9b)

![6](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/02ca9070-35b8-4e92-98df-f9f5bd178338)

![8](https://github.com/ATOMworkplace/FinanceCraft/assets/114564628/5fc93393-2dbd-4ba9-a7cc-e13ba90fd21c)


<h2>Tech Stack</h2>
<ul>
<li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap</li>
<li><strong>Backend:</strong> Node.js, Express.js</li>
<li><strong>Machine Learning:</strong> Python, Jupyter Notebook</li>
<li><strong>Machine Learning Libraries:</strong> Pandas, Scikit-learn</li>
<li><strong>APIs:</strong> Alpha Vantage, Yahoo Finance</li>
<li><strong>Data Visualization:</strong> Matplotlib, Plotly</li>
</ul>

<h2>Implementation</h2>
<h3>Web Development</h3>
<p>FinanceCraft's web interface is designed with user experience in mind. Using HTML, CSS, and JavaScript, we create dynamic web pages that allow users to navigate seamlessly and interact with the platform's features. Express.js and Node.js power the backend, handling server-side logic and API requests.</p>

<h3>Machine Learning</h3>
<p>In the backend, Python and Jupyter Notebook serve as the foundation for implementing machine learning algorithms. Leveraging libraries such as Pandas and Scikit-learn, we preprocess and analyze historical stock market data. The trained models, including Random Forest, SVM, and Linear Regression, enable FinanceCraft to forecast stock market trends accurately.</p>

<h3>Data Integration</h3>
<p>FinanceCraft integrates with Alpha Vantage and Yahoo Finance APIs to fetch real-time and historical stock market data. This data is then processed, cleaned, and transformed into actionable insights using Python's data manipulation capabilities.</p>

<h2>Results and Performance Analysis</h2>
<h3>Random Forest</h3>
<p>The Random Forest model achieves an accuracy score of approximately 50%, indicating performance comparable to random guessing. Further enhancements, such as feature engineering and hyperparameter tuning, are recommended to improve predictive accuracy.</p>

<h3>SVM (Support Vector Machine)</h3>
<p>The SVM classifier provides an interactive interface for users to select stock symbols and date ranges. It fetches historical data from Yahoo Finance API, calculates binary variables, and visualizes decision boundaries. Interactive widgets allow users to explore and analyze stock price trends effectively.</p>

<h2>Website Implementation</h2>
<h2>Website Implementation Details</h2>

<p>FinanceCraft's website implementation involves using several technologies such as Express.js, EJS, and HTML/CSS/JavaScript to create dynamic web pages for stock analysis.</p>

<h3>Setup and Dependencies:</h3>
<p>The server-side setup involves using Express.js to create routes and handle requests. Body-parser is used for parsing request bodies, while EJS is the templating engine. HTTP module is utilized for making API requests.</p>

<h3>Routing:</h3>
<p>Different routes are defined for various pages such as the home page ("/") and analysis page ("/analyse"). Each route renders a specific EJS template.</p>

<h3>Data Retrieval:</h3>
<p>The "/daily-data" route fetches daily stock market data using the Alpha Vantage API. It retrieves data for a specified stock symbol (default is 'AAPL').</p>

<h3>Presentation:</h3>
<p>The fetched data is presented in a tabular format on the webpage. A form allows users to enter a stock symbol, and upon submission, the corresponding data is fetched and displayed dynamically without the need for page reload.</p>

<h3>Interactive User Interface:</h3>
<p>Users can input a stock symbol and fetch its daily data by clicking the "Fetch Data" button. The retrieved data, including date, open, high, low, close, and volume, is displayed in a table below the form.</p>

<h3>Technical Analysis:</h3>
<p>A link is provided for conducting technical analysis using external tools. Users can click the link to access additional analysis tools.</p>


<h2>Data Retrieval and Preprocessing:</h2>
<ul>
  <li>Python libraries such as yfinance, pandas, pandas_ta, and scikit-learn are used for data retrieval and preprocessing.</li>
  <li>Historical stock market data is fetched using yfinance.</li>
  <li>Technical indicators such as Average Directional Index (ADX), Relative Strength Index (RSI), Exponential Moving Average (EMA), and Simple Moving Average (SMA) are calculated using pandas_ta.</li>
  <li>Features such as open, high, low, close prices, volume, ADX, RSI, EMA, and SMA are extracted and normalized using scikit-learn's MinMaxScaler.</li>
</ul>

<h2>Model Training and Evaluation:</h2>
<ul>
  <li>A Random Forest classifier is trained on the preprocessed data to predict stock price direction.</li>
  <li>The model is evaluated using accuracy score to assess its performance.</li>
  <li>Results are displayed using visualizations such as bar plots to compare actual and predicted price directions.</li>
</ul>

<h2>Interactive User Interface:</h2>
<ul>
  <li>Users can input a stock symbol to fetch corresponding data.</li>
  <li>The interface dynamically updates based on the selected stock symbol, displaying the retrieved data and prediction results.</li>
  <li>Widgets are provided for user interaction, enabling seamless exploration and analysis of stock price trends.</li>
</ul>

