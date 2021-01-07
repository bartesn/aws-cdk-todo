import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';
import { Tags } from '@aws-cdk/core';

interface HostingProps {
  path: string;
}

export class Hosting extends cdk.Construct {
  public readonly websiteBucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, props: HostingProps) {
    super(scope, id);

    this.websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });
    Tags.of(this.websiteBucket).add('Module', 'Storage');

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(props.path)],
      destinationBucket: this.websiteBucket,
    });

    // Output
    new cdk.CfnOutput(this, 'BucketWebsiteUrl', {
      value: this.websiteBucket.bucketWebsiteUrl,
      exportName: 'BucketWebsiteUrl',
    });
  }
}
