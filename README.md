
Identifying High Valueble Customers by modeling Life Time Value (LTV).

Team Members: Ernesto Beltran,Mike Whitmore,Francisco Lobeira,Aparna

### URL FOR DATA :- https://www.kaggle.com/pankajjsh06/ibm-watson-marketing-customer-value-data


Objective: 
Predict Customer Life-time Value (LTV)for a Auto Insurance Company.
The lifetime value of a customer, or customer lifetime value (LTV), represents the total amount of money a 
customer is expected to spend in business, or on products, during their lifetime. This is an important figure
to know because it allows companies to make decisions about how much money to invest in acquiring new customers 
and retaining existing ones. We will build different models ranging from liniar regressions to deep learning.
After assesing the reliebility and performnce of each model, we will create an inputs dashboardwhere the company's
 managment team will be able to input the independent varaibles and rank potential customers in order to 
allocate effective resources. We belive this model can dictate the marketing budget and allocation. 

Process: 
1. Data Understanding 
	- Number of variables (Categorical, discrete, continuous)
	- Visualization
2. Exploratory Data Anlysis
	- Descriptive Analysis of CustomerLifetimeValue.
	- LTV by Geography.
	- Descriptive Analysis ofTotalClaimAmount 
3. Data Processing
	- Add latitude and longitude coordinates columns.
	- Create bins for LTV customers (5 bins).
	- Perform feature selection and remove unnecessary features.
	- Use MinMaxScaler to scale the numerical data.
	- Separate the data into training and testing data.
4. Multiple Linear Regression
	- Determine Coefficient Weights
5. Neural Network Model
6. Dashboard




![](https://github.com/mwhitmore1/final-project/blob/aparna/TABLUEAIMAGES/dataundestanding.png)

#### Summary visuals


High school education is almost 1300k total claims.
Max CLV is 84,000$ and 2893$ is  highest total claim amount per customer
Personal auto , no of  claims is highest that is costing more money to insurance 
Bachelor ,college and high school  education background are doing highest no of claims
Basic coverage 4 door car is highest at 854k and is highest in any coverage taken.
Luxury car is least total claims irrespective of coverage type.
Count of female is more than male
3150 is max no of complaints from california and total claim amount also highest
Average value of female almost same as male. Claim value independent of gender 
Most claims highest in california and 
Male ,female per policy cost in Nevada is very variant.

### URL FOR SLIDES :- https://docs.google.com/presentation/d/1dJ-ghtfjRYkKLlFAdKNnC1YD5xWnhuZTl0iQwOMRVbU/edit?ts=5f175fae#slide=id.g8dd572efe9_0_134


* If time allows: We would also like to take into acount claims and estimate a cost for the company and deduct from LTV,
in order to have a more comprehensive metric.

------------------------------------------------------------------------------------------------------------------------------------------
OLD README:

Our goal is to measure user behavior in digital ecommerce platforms. Measuring this behavior will allow us to have more targeted and personalized campaigns. 

Track customer churn.
- churn chart
Conversion rate.
- bar graph with buckets
Funnels.
- bar chart
Customer journey
- Sunburst






