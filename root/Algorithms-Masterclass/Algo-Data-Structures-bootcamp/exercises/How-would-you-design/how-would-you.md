# How would you design Twitter? Or Uber?

Often asked during an interview. 

| **High Level Notes**                              |                                                                                                                                                                                                                                                             |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| There is no right answer.                         | -                                                                                                                                                                                                                                                           |
| Every interviewer will expect a different answer. | Ask if there's a particular area you'd like to focus on (scaling to large amount of users? The challenges you expect to face?)                                                                                                                              |
| Focus on the **data model**.                      | How you'd create a data model to reflect the information in a given product. (How do you store Tweets?  How do you store Users?)                                                                                                                            |
| Do not mention specific technologies.             | Do not simply say you'll use React, Redux, or Node.js.  Much better way is to say that you'd use a framework that can easily render out a list of Tweets, a framework that works well with mobile. List out the **qualities** of a framework you would use. |
| Draw stuff                                        | Draw out what a user sees.                                                                                                                                                                                                                                  |
| Talk                                              | Communicate with the interviewer. Want to understand how you talk about complicated topics. Do not pause and think. Ask a question, give the interviewer an idea of what you are thinking.                                                                  |

## General Strategy

1. Identify **two** core **features** of the product.
    - Good place to **draw a diagram** of the user interface.
    - What is the user going to see?
    - What can the user do?
    - May focus on **how does a tweet work?** and **focus on the user feed**
2. Possible **implementations** of those features.
    - What happens when the user clicks the **tweet button?**
    - How do we send a request to the backend server when we create a new tweet?
      - What fields does the database need to store data?
3. Identify and address **challenges**.
    - How do we make the '#topic' hashtag work?
    - How do we make the '@user' mention work?
    - How do we order the tweets in a feed?
4. Solutions for **scaling**.
    - **Caching** data from the database.
      - recall that this can be applied to almost any product.
      - general idea is that a we have an expensive computation. We store the result in a cache. Anytime this user comes back to the site, we can retrieve the result from the cache.
      - reusing the result of the expensive computation.
    - **deployment options**.
      - may not be able to use a single server to serve all the requests. We just have too many users. 
      - therefore we will use a **load balancer** to distribute the requests to one of our identical servers. This is an example of horizontal scaling. 