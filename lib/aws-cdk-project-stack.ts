import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
// import { aws_s3 as s3 } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // define S3 bucket in stack using bucket construct
    // new s3.Bucket(this, "AWSCDKProjectBucket", {
    //   versioned: true,
    //   removalPolicy: cdk.RemovalPolicy.DESTROY,
    //   autoDeleteObjects: true,
    // });

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X, // execution environment
      code: lambda.Code.fromAsset("lambda"), // code loaded from "lambda" directory
      handler: "hello.handler", // file is "hello", function is "handler"
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
    });
    
  }
}
