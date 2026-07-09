Linear regression is the simplest form of a classification problem. We have many techniques to do this type of regression. Today we are going to learn how to use the PyTorch API to help us do this classification.

![Regression line fit](/slr_image.png)

The core concept behind the linear regression is the line equation. **Y = m * x + C**, Where Y , x = point on the line, m = slope , C = Y intercept. So, from the above equation we can create a line just by finding the optimal values of m,C.

So we create a neural network and initialize it with random weights and biases. These represent the m,C of the line.

## Training the Network

In the above illustration it is clearly evident that the m,C are not able to help us classify the data correctly. So, any prediction deduced from the network is going to be wrong. Now, we have to train the network to get the optimal values of the m,C (weights and bias).

While training networks for simple regression problems we need not worry much about over-fitting in most of the cases, but if the number of epochs are not enough then the model might under-fit. In most of the cases 100–200 epochs are more than enough.
