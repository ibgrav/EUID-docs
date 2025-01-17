---
title: The EUID Operator
description: Information about Public and Private Operators and the differences between them.
hide_table_of_contents: false
sidebar_position: 06
---

import Link from '@docusaurus/Link';

# The EUID Operator

The EUID Operator Service enables the management and storage of encryption keys and [salts](../ref-info/glossary-uid.md#gl-salt) from the EUID Core Service, hashing of users' <Link href="../ref-info/glossary-uid#gl-personal-data">personal data</Link>, encryption of [raw EUIDs](../ref-info/glossary-uid.md#gl-raw-euid), and decryption of <Link href="../ref-info/glossary-uid#gl-euid-token">EUID tokens</Link>.

All instances of the Operator Service are designed with rigorous protections in place to keep critical EUID data secure and interoperable, regardless of who operates the service.

## EUID Operator: Overview

There can be multiple instances of the Operator Service, operated by multiple participants. Each of these participants is known as an EUID Operator.

An EUID Operator is simply an organization that runs the Operator Service. Operators receive and store encryption keys and salts from the EUID Core Service, salt and hash personal data to return raw EUIDs, encrypt raw EUIDs to generate EUID tokens, and distribute EUID token decryption keys.

EUID Operators fall into two categories:

- [Public Operators](#public-operators)
- [Private Operators](#private-operators)

The Operator is the operational code of EUID&#8212;the code that turns an email into a raw EUID or an EUID token.

## Public Operators

A Public Operator, or Open Operator, is an EUID Operator instance that is available to all relevant EUID participants. Public Operators run publicly available instances of the Operator Service and make them available to participants.

In most cases, EUID participants use a Public Operator.

The Public Operator is owned and managed by the EUID administration. For example, The Trade Desk currently serves as a Public Operator for the EUID framework, available to all participants. If other Public Operators are available, a participant can choose which operator to work with.

## Public Operator: Benefits

When you use a Public Operator, there is no additional work for you to do to host, configure, maintain, or update the Operator. All you need to do is configure your integration to use an SDK or to call the EUID endpoints.

There is no cost, to the participant, for using a Public Operator.

The participant must sign a contract (see [Account Setup](../getting-started/gs-account-setup.md)) to get the applicable credentials ([API key and client secret](../getting-started/gs-credentials.md#api-key-and-client-secret)) to use the EUID APIs hosted on the Public Operator.

:::note
With a Public Operator, data leaves the participant's infrastructure and is sent to the Operator. Rigorous security measures are in place to help protect the data within the Public Operator.
:::

##  Private Operators

A Private Operator, or Closed Operator, is a private instance of the EUID Operator. This means that a specific entity hosts a private instance exclusively for their own use.

Any participant can also choose to become a Private Operator to generate and manage their EUIDs. However, becoming a Private Operator includes several additional steps, and uses resources that the participant must provide.

The participant must host, configure, maintain, and update the Private Operator instance, and must conform to strict security measures. Engineering resources are required to integrate and to make ongoing updates.

The participant must sign a contract (see [Account Setup](../getting-started/gs-account-setup.md)) to host a Private Operator instance.

:::note
A Private Operator cannot process raw EUIDs or EUID tokens from a Public Operator or another Private Operator. Each Private Operator is a completely closed infrastructure.
:::

## Private Operator: Benefits

Some reasons why a participant might choose to become a Private Operator:

- Within a Private Operator solution, personal data does not leave your infrastructure.

- When you have a Private Operator, you're in charge of resources. You have more control. For example, you can provide greater availability, without rate limitations.

- If you are not physically located near to a Public Operator instance, you might choose to host a Private Operator solution for latency reasons.

If you have significant latency concerns, or your security requirements dictate that data stays within your systems, and you also have extensive engineering resources to both build and maintain your EUID implementation, you might consider the Private Operator solution. 

## Summary

For most participants, Public Operator is the simplest solution.

The down side of the Private Operator option is that it requires ongoing engineering effort to build and maintain. Because a Private Operator instance is managed by the participant, there are continual updates and changes that are required and must be completed within a specified time frame.

A Public Operator integration is a much easier option than creating your own instance. There is no cost to the participant, and virtually no engineering work is needed other than initial setup and configuration.

For these reasons, we recommend choosing a Public Operator. 
