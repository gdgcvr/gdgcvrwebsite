This article is a simple guide that will help you build and understand the concepts behind building a simple CNN. By the end of this article you will be able to build a simple CNN based on the PyTorch API and will classify clothing using the FashionMNIST dateset.

## What is a CNN?

The concept of CNN or Convolution Neural Networks was popularized by Yann André LeCun who is also known as the father of the convolution nets. A CNN works very similar to how our human eye works. The core operations that are behind the CNN's are matrix additions and multiplications. So, there is no need to get worried about them.

![CNN Architecture](/cnn_img.png)

But to know about the working of the CNN's we need to know how the image gets stored in the computer. The core function behind a CNN is the convolution operation. It is multiplication of the image matrix with a filter matrix to extract some important features from the image matrix.

## Max-Pooling & Dropout

Another important component of a CNN is called the Max-pool layer. This helps us in reducing the number of features i.e. it sharpens them so that our CNN performs better.

So now you are aware of the layers we are going to use. This knowledge is enough for building a simple CNN but one optional layer call the dropout will help the CNN perform well. Dropout layer is placed in between the fc layers and this randomly drops the connection with a set probability which will help us in training the CNN better.
