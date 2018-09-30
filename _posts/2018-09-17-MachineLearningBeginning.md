---
layout: post
title: Learning "Machine Learning"
subtitle: Equipping my quiver of skills
image: /img/ml.jpg
js: [/js/github-buttons.js, /js/required.js]
ext-js: https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
css: [/css/required.css, /css/github-buttons.css]
tags: [Machine-Learning]
---
Over the course of the past month I too jumped on the Machine Learning wagon and started getting familiar with the concept through various online sources. So, the one thing that I noticed was that while there are numerous sources to learn the basics and getting started with various
concepts in Machine Learning and Artificial Intelligence in general, but all of them are spread out across various sites and sources, which prompted me to write this post as a one stop spot with all concepts that I have learnt so far.
### External Sources
I started with some MIT-OCW classes and the IntelStudentsKit to learn the basics. Here is a list of all the sources I used :  
  - *Intel Student Kits* listed [here](https://software.intel.com/en-us/ai-academy/students/kits) especially _Machine Learning 501_ and _Deep Learning 501_. These kits include study material and exercise "notebooks"<a href="#notebooks"><sup>[1]</sup></a> divided up into chunks of week long tasks which makes them convinient to follow.  
  - [6.034 Artificial Intelligence](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/) from the MIT-OpenCourseWare catalogue. This Prof. Winston instructed course is great at piquing the interest of any student and  also helps in understanding some really complex topics like Support Vector Machines with ease.  
  - Besides the exercises in the Intel Student Kits I also reffered to some lessons and examples on [Kaggle](https://www.kaggle.com/learn/machine-learning) to get a broader prespective on how things are/should be done.  
  - And the holy grail of courses for machine learning beginners, [Machine Learning by Andrew Ng ](https://www.coursera.org/learn/machine-learning) on Coursera.

### What is Machine Learning? Why all the buzz?
Machine learning refers to the ability given to a computer to learn from a set of data without being explicitly programmed. This helps in predicting and extrapolating based on the _model trained_ . There are a myriad of applications of ML in our day-to-day life like personal assistants(Siri
,Google Assistant, Bixby), face recognition from photos used by Facebook and Google Photos alike, "People You may Know" suggestions, E-mail spam filtering, online customer support on most websites today and tons of other. So, there is no doubt in the fact the ML and Artificial
Intelligence well deserves the recent buzz as practically any task that can be learnt over time and has to be performed repeatedly can be done using a computer using ML concepts. Broadly there are three types of Machine Learning algorithms,
  - *Supervised Learning* this algorithm uses a dataset which clearly defines the output in the data thus a clear relationship between the input and the outcome can be established and used for predicting for unknown outcomes. This is turn can be classified into two categories,
    - Regression : The outcome to be predicted is a continuous variable and can take any value in a given range like the price of a house.
    - Classification : The outcome in this case can only take discrete values in a range for example, sorting mails into spam(=1) and not spam(=0).
  - *Unsupervised Learning* allows us approach problems which do not have clearly defined outcome and are generally used to establish some structure in the data.
  - Using *Reinforcement Learning* the machine trained in a scenario using where it has to make decisions and learns using trial and error.  
  
With several regression techniques to fit a model, validation techniques, classification algorithms, parameter fitting with gradient descent/normalization and 
not to mention the regularisation techniques learning ML concepts gets overwhelming for a beginner pretty quick. So I intend this blog as a one stop spot for all the crucial concepts in brief, which would act as a revision for concepts and might also establish some few flow ideas for when
approaching new problems. Lets dive into the good stuff then.

========= WIP ================
Target 
label
example 
features

A general flow for problem solving through machine learning

Linear regression
Fitting parameters for regression
cost functin
gradient descent batch stochastic mini batch
advanced optimisation bfgs l bfgs conjugate gradient
feature scaling
logistic regression do not be confused by regression
multiclass classifications
hyperparametes
model validation
cross validation
train test split
one hot encoding
ridge
lasso
elastic net
laplace smoothing
regularization
overfitting underfitting
model selection
