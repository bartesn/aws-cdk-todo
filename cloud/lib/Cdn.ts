import * as cdk from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as s3 from '@aws-cdk/aws-s3';

interface CDNProps {
  bucket: s3.Bucket;
}

export class CDN extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: CDNProps) {
    super(scope, id);

    const distribution = new cloudfront.Distribution(
      this,
      'CloudFrontDistribution',
      {
        defaultBehavior: {
          origin: new origins.S3Origin(props.bucket),
        },
      }
    );

    // Output
    new cdk.CfnOutput(this, 'CloudFrontDistributionUrl', {
      value: `https://${distribution.distributionDomainName}`,
      exportName: 'CloudFrontDistributionUrl',
    });
  }
}
