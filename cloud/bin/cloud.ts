#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudStack } from '../lib/cloud-stack';

const app = new cdk.App();
new CloudStack(app, 'CloudStack');
