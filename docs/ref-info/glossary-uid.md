---
title: EUID Glossary
description: Definitions for some EUID terms.
hide_table_of_contents: false
sidebar_position: 10
---

import MdxJumpAnchor from '@site/src/components/MdxJumpAnchor';
import Link from '@docusaurus/Link';

# EUID Glossary
<p>This page defines some key terms used in the EUID documentation.</p>

<!-- 
**A**
<a href="#gl-advertising-id">Advertising ID</a> | 
<a href="#gl-advertising-token">Advertising token</a> | 
<a href="#gl-api-key">API key</a> | 
<a href="#gl-api-secret">API secret</a> | 
<a href="#gl-app-name">App name</a> | 
<a href="#gl-authorization-header">Authorization header</a> | 

**B**
<a href="#gl-bearer-token">Bearer token</a> | 
<a href="#gl-bidstream">Bidstream</a> | 

**C**
<a href="#gl-client-key">Client key</a> | 
<a href="#gl-client-secret">Client secret</a> | 
<a href="#gl-client-server">Client-server integration</a> | 
<a href="#gl-client-side">Client-side integration</a> | 
<a href="#gl-closed-operator">Closed Operator</a> | 
<a href="#gl-core-service">Core Service</a> | 

**D**
<a href="#gl-data-provider">Data provider</a> | 
<a href="#gl-demand-side-platform">Demand-side platform</a> | 

**E**
<a href="#gl-enclave">Enclave</a> | 
<a href="#gl-euid-framework">EUID framework</a> | 
<a href="#gl-euid-identifier">EUID identifier</a> | 
<a href="#gl-euid-service">EUID service</a> | 
<a href="#gl-euid-token">EUID token (advertising token)</a> | 
<a href="#gl-euid">European Unified ID</a> | 

**F**
<a href="#gl-first-level-hash">First-level hash</a> | 

**H**
<a href="#gl-hash">Hash</a> | 

**I**
<a href="#gl-identity">Identity</a> | 
<a href="#gl-integration-approaches">Integration approaches</a> 

**J**
<a href="#gl-json-web-token">JSON Web Token (JWT)</a> | 

**N**
<a href="#gl-normalize">Normalize</a> | 

**O**
<a href="#gl-open-operator">Open Operator</a> | 
<a href="#gl-operator">Operator</a> | 
<a href="#gl-operator-key">Operator key</a> | 
<a href="#gl-operator-service">Operator Service</a> | 
<a href="#gl-opt-out">Opt-out</a> | 
<a href="#gl-opt-out-service">Opt-Out Service</a> | 

**P**
<a href="#gl-participant">Participant</a> | 
<a href="#gl-personal-data">Personal data</a> | 
<a href="#gl-private-operator">Private Operator</a> | 
<a href="#gl-private-operator-service">Private Operator Service</a> | 
<a href="#gl-public-key">Public key</a> | 
<a href="#gl-public-operator">Public Operator</a> | 

**R**
<a href="#gl-raw-euid">Raw EUID</a> | 
<a href="#gl-refresh-token">Refresh token</a> | 

**S**
<a href="#gl-salt">Salt</a> | 
<a href="#gl-salted-hash">Salted hash</a> | 
<a href="#gl-secret">Secret</a> | 
<a href="#gl-server-side">Server-side integration</a> | 
<a href="#gl-sha-256">SHA-256</a> | 
<a href="#gl-subscription-id">Subscription ID</a> | 

**T**
<a href="#gl-transparency-and-control-portal">Transparency and Control Portal</a> | 

**U**
<a href="#gl-uid">UID</a> | 
<a href="#gl-uid2-framework">UID2 Framework</a> | 
<a href="#gl-utc">UTC</a> | 
 -->

### A
<dl>

<dt><MdxJumpAnchor id="gl-advertising-id"><a href="#gl-advertising-id">Advertising ID</a></MdxJumpAnchor></dt>
<dd>Advertising ID is another term for a <a href="#gl-raw-euid">raw EUID</a>.</dd>

<dt><MdxJumpAnchor id="gl-advertising-token"><a href="#gl-advertising-token">Advertising token</a></MdxJumpAnchor></dt>
<dd>Advertising token is another term for a <a href="#gl-euid-token">EUID token</a>.</dd>

<dt><MdxJumpAnchor id="gl-api-key"><a href="#gl-api-key">API key</a></MdxJumpAnchor></dt>
<dd>Each EUID <a href="/docs/intro#participants">participant</a> using a server-side implementation has an API key (client key) and also a secret value associated with the key, called the client secret (API secret). The client secret is known only to the participant and the EUID service.</dd>
<dd>For details, see <a href="../getting-started/gs-credentials">EUID Credentials</a>.</dd>

<dt><MdxJumpAnchor id="gl-api-secret"><a href="#gl-api-secret">API secret</a></MdxJumpAnchor></dt>
<dd>See <a href="#gl-client-secret">client secret</a>.</dd>

<dt><MdxJumpAnchor id="gl-app-name"><a href="#gl-app-name">App name</a></MdxJumpAnchor></dt>
<dd>In the context of mobile integrations, the app name is the Android application ID, the iOS app store ID, or the iOS bundle identifier.</dd>

<dt><MdxJumpAnchor id="gl-authorization-header"><a href="#gl-authorization-header">Authorization header</a></MdxJumpAnchor></dt>
<dd>The Authorization header is a way to authenticate the client to the EUID service.</dd>
<dd>For details, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.authorization">11.6.2. Authorization</a> in RFC 9110, the HTTP specification.</dd>

</dl>

### B

<dl>

<dt><MdxJumpAnchor id="gl-bearer-token"><a href="#gl-bearer-token">Bearer token</a></MdxJumpAnchor></dt>
<dd>A bearer token is a special string that identifies the client. For authentication, some EUID endpoints require the <a href="#gl-client-key">client key</a> to be specified as a bearer token in the Authorization header of the request: for example, <a href="../endpoints/post-token-generate">POST&nbsp;/token/generate</a>.</dd>

<dt><MdxJumpAnchor id="gl-bidstream"><a href="#gl-bidstream">Bidstream</a></MdxJumpAnchor></dt>
<dd>To place a request for an ad to be placed in an advertising spot (bid request), the publisher sends different pieces of information, so that advertisers can bid on it, generally through an advertising exchange or DSP. The flow of bidding data is the bidstream.</dd>
<dd>Bidstream data goes from publishers to other entities (depending on the publisher's configuration) and back to the publisher.</dd>
</dl>

### C

<dl>

<dt><MdxJumpAnchor id="gl-client-key"><a href="#gl-client-key">Client key</a></MdxJumpAnchor></dt>
<dd>See <a href="#gl-api-key">API key</a>.</dd>

<dt><MdxJumpAnchor id="gl-client-secret"><a href="#gl-client-secret">Client secret</a></MdxJumpAnchor></dt>
<dd>Each EUID <a href="../intro#participants">participant</a> using a server-side implementation has an API key (client key) and also a secret value associated with the key, called the client secret (API secret). The client secret is known only to the participant and the EUID service.</dd>
<dd>For details, see <a href="../getting-started/gs-credentials">EUID Credentials</a>.</dd>

<dt><MdxJumpAnchor id="gl-client-server"><a href="#gl-client-server">Client-server integration</a></MdxJumpAnchor></dt>
<dd>One of the EUID <a href="#gl-integration-approaches">integration approaches</a> is to integrate partially on the client side and partially on the server side (client-server).</dd>
<dd>For example, in a client-server integration for a publisher, the EUID token is generated on the server side and refreshed on the client side.</dd>
<dd>Examples of documentation for publisher client-server integrations: <a href="../guides/integration-prebid-server-side">EUID Client-Server Integration Guide for Prebid.js</a>, <a href="../guides/integration-javascript-server-side">Client-Server Integration Guide for JavaScript</a>.</dd>

<dt><MdxJumpAnchor id="gl-client-side"><a href="#gl-client-side">Client-side integration</a></MdxJumpAnchor></dt>
<dd>One of the EUID <a href="#gl-integration-approaches">integration approaches</a> is to integrate entirely on the client side.</dd>
<dd>In a client-side integration, EUID tokens are generated and refreshed on the client side.</dd>
<dd>For example, in a client-side integration, advertisers generate EUID tokens on the client side for tracking pixels, and publishers generate EUID tokens on the client side for bidstream use, as well as refreshing the tokens.</dd>
<dd>Examples of documentation for publisher client-side integrations: <a href="../guides/integration-prebid-client-side">EUID Client-Side Integration Guide for Prebid.js</a>, <a href="../guides/publisher-client-side">Client-Side Integration Guide for JavaScript</a>.</dd>

<dt><MdxJumpAnchor id="gl-closed-operator"><a href="#gl-closed-operator">Closed Operator</a></MdxJumpAnchor></dt>
<dd>Closed Operator is another term for a <a href="#gl-private-operator">Private Operator</a>.</dd>

<dt><MdxJumpAnchor id="gl-core-service"><a href="#gl-core-service">Core Service</a></MdxJumpAnchor></dt>
<dd>The EUID Core Service is a centralized service that manages access to <a href="#gl-salt">salts</a>, encryption keys, and other relevant data in the EUID ecosystem.</dd>
<dd>For an overview of all the EUID services, see <a href="../intro#components">Components</a>.</dd>

</dl>

### D

<dl>

<dt><MdxJumpAnchor id="gl-data-provider"><a href="#gl-data-provider">Data provider</a></MdxJumpAnchor></dt>
<dd>In the context of EUID, a data provider is any entity that provides data and measurement services relating to advertising, such as a data partner, measurement partner, or offline measurement provider.</dd>
<dd>For details, see <a href="../intro#participants">participant</a> (Data Providers).</dd>

<dt><MdxJumpAnchor id="gl-demand-side-platform"><a href="#gl-demand-side-platform">Demand-side platform</a></MdxJumpAnchor></dt>
<dd>A demand-side platform (DSP) provides services to companies that want to buy digital advertising, such as advertisers, brands, and media agencies.</dd>

</dl>

### E

<dl>

<dt><MdxJumpAnchor id="gl-enclave"><a href="#gl-enclave">Enclave</a></MdxJumpAnchor></dt>
<dd>An enclave is a secure subsection of a computing environment. The enclave has additional business logic and security measures applied to it, to prevent anyone from tampering with it.</dd>
<dd>In the context of EUID, a <a href="#gl-private-operator">Private Operator</a> must run inside an enclave or in a private environment.<!--  For a summary of the enclave versions supported, see <a href="../guides/summary-guides#private-operator-service-integrations">Private Operator Service Integrations</a>. --></dd>
<dd>In an enclave, the operator image must be a very specific, predefined version, and additional constraints are applied to ensure security.</dd>

<dt><MdxJumpAnchor id="gl-euid-framework"><a href="#gl-euid-framework">EUID framework</a></MdxJumpAnchor></dt>
<dd>The European Unified ID (EUID) framework enables deterministic identity for advertising opportunities on the open internet for many <a href="../intro#participants">participants</a> across the advertising ecosystem. It enables logged-in experiences from publisher websites, mobile apps, and Connected TV (CTV) apps to monetize through programmatic workflows. Built as an open-source, standalone solution with its own unique namespace, the framework focuses on transparency and privacy.</dd>
<dd>EUID operates in the European region, including many European countries, such as France, Italy, and Spain, some non-European countries, such as Iceland, and some other regions, such as the Azores, Martinique, and the United Kingdom. It was designed with EU privacy law compliance in mind.</dd>
<dd>There are many similarities between UID2 and EUID, but they are completely separate, and their tokens are not interchangeable.</dd>

<dt><MdxJumpAnchor id="gl-euid-identifier"><a href="#gl-euid-identifier">EUID identifier</a></MdxJumpAnchor></dt>
<dd>There are two European Unified ID (EUID) identifier types: <a href="#gl-raw-euid">raw EUIDs</a> and <a href="#gl-euid-token">EUID tokens</a> (also known as advertising tokens).</dd>
<dd>For details, see <a href="../intro#euid-identifier-types">EUID Identifier Types</a>.</dd>

<dt><MdxJumpAnchor id="gl-euid-service"><a href="#gl-euid-service">EUID service</a></MdxJumpAnchor></dt>
<dd>The European Unified ID (EUID) service is a set of components, API endpoints, and other types of solutions that collectively implement the <a href="#gl-euid-framework">EUID framework</a> and provide clients with access to the relevant EUID functionality.</dd>
<dd>The term "EUID service" is also used to mean the EUID <a href="#gl-operator-service">Operator Service</a>.</dd>

<dt><MdxJumpAnchor id="gl-euid-token"><a href="#gl-euid-token">EUID token (advertising token)</a></MdxJumpAnchor></dt>
<dd>A European Unified ID (EUID) token, also called an advertising token, is an encrypted form of a <a href="#gl-raw-euid">raw EUID</a>.</dd>
<dd>EUID tokens are generated from hashed or unhashed email addresses<!--  or phone numbers --> that are converted to raw EUIDs and then encrypted. The EUID token is a unique value; no two EUID tokens are the same. EUID tokens are case sensitive.</dd>
<dd>The token has a limited life, but can be refreshed in the background using the <a href="#gl-refresh-token">refresh token</a>.</dd>
<dd>Publishers send EUID tokens in the bidstream.</dd>
<dd>For details, see <a href="../intro#euid-identifier-types">EUID Identifier Types</a>.</dd>

<dt><MdxJumpAnchor id="gl-euid"><a href="#gl-euid">European Unified ID</a></MdxJumpAnchor></dt>
<dd>The term EUID can be used to mean the <a href="#gl-euid-framework">EUID framework</a>, the <a href="#gl-euid-service">EUID service</a>, a <a href="#gl-raw-euid">raw EUID</a>, or a <a href="#gl-euid-token">EUID token</a> (advertising token).</dd>

</dl>

### F

<dl>

<dt><MdxJumpAnchor id="gl-first-level-hash"><a href="#gl-first-level-hash">First-level hash</a></MdxJumpAnchor></dt>
<dd>In the context of EUID, the first-level hash is the anonymized, opaque, secure value from which the <a href="#gl-raw-euid">raw EUID</a>, <a href="#gl-euid-token">EUID token</a>, and <a href="#gl-refresh-token">refresh token</a> are generated. Several cryptographic functions, including salting and hashing, are applied to the initial <!-- value, whether an  -->email<!--  or a phone number -->, to create the first-level hash.</dd>

</dl>

### H

<dl>

<dt><MdxJumpAnchor id="gl-hash"><a href="#gl-hash">Hash</a></MdxJumpAnchor></dt>
<dd>A hash function converts a set of data of varying/arbitrary size to a set of data of fixed size. The result of the hash function is called a hash, digest, or hash value.</dd>
<dd>Hashing is a one-way function. The same input value, hashed, always yields the same output value, but there is no corresponding function to take the output value and arrive at the input value. Hashing is a security measure.</dd>
<dd>EUID uses the <a href="#gl-sha-256">SHA-256</a> hashing algorithm.</dd>

</dl>

### I

<dl>

<dt><MdxJumpAnchor id="gl-identity"><a href="#gl-identity">Identity</a></MdxJumpAnchor></dt>
<dd>In the context of EUID, the term "identity" refers to a package of values that includes the EUID token, the refresh token, and associated values such as timestamps. This set of values is returned in the response from the <a href="../endpoints/post-token-generate">POST&nbsp;/token/generate</a> endpoint and also from the <a href="../endpoints/post-token-refresh">POST&nbsp;/token/refresh</a> endpoint.</dd>

<dt><MdxJumpAnchor id="gl-integration-approaches"><a href="#gl-integration-approaches">Integration approaches</a></MdxJumpAnchor></dt>
<dd>EUID integrations can be entirely on the <a href="#gl-client-side">client side</a>, entirely on the <a href="#gl-server-side">server side</a>, or partially on the client side and partially on the server side (<a href="#gl-client-server">client-server</a>).</dd>

</dl>

### J

<dl>

<dt><MdxJumpAnchor id="gl-json-web-token"><a href="#gl-json-web-token">JSON Web Token (JWT)</a></MdxJumpAnchor></dt>
<dd>A JSON Web Token (JWT) is a compact, URL-safe means of representing claims (pieces of information) to be sent from one party to another over the web. The claims in a JWT are encoded as a JSON object that is used either as the payload of a JSON Web Signature (JWS) structure or as the plain text of a JSON Web Encryption (JWE) structure. This enables the claims to be digitally signed and/or encrypted.</dd>

</dl>

### N

<dl>

<dt><MdxJumpAnchor id="gl-normalize"><a href="#gl-normalize">Normalize</a></MdxJumpAnchor></dt>
<dd>To normalize a data set means to bring it to a standard condition or state.</dd>
<dd>EUID includes specific normalization rules. For details, see <a href="../getting-started/gs-normalization-encoding#email-address-normalization">Email Address Normalization</a><!--  and <a href="../getting-started/gs-normalization-encoding#phone-number-normalization">Phone Number Normalization</a> -->.</dd>

</dl>

### O

<dl>

<dt><MdxJumpAnchor id="gl-open-operator"><a href="#gl-open-operator">Open Operator</a></MdxJumpAnchor></dt>
<dd>Open Operator is another term for a <a href="#gl-public-operator">Public Operator</a>.</dd>

<dt><MdxJumpAnchor id="gl-operator"><a href="#gl-operator">Operator</a></MdxJumpAnchor></dt>
<dd>An Operator is an organization or entity that runs the EUID <a href="#gl-operator-service">Operator Service</a>. The EUID Operator is the API server in the EUID ecosystem.</dd>
<dd>Operators perform multiple functions, such as receiving encryption keys and salts from the EUID Core Service, salting and hashing personal data to return raw EUIDs, and encrypting raw EUIDs to generate EUID tokens.</dd>
<dd>A participant can also choose to become a <a href="#gl-private-operator">Private Operator</a> to access EUID APIs and to generate raw EUIDs and EUID tokens from within a private infrastructure.</dd>
<dd>For details, see <a href="../intro#participants">participants</a> and <a href="../ref-info/ref-operators-public-private">The EUID Operator</a>.</dd>

<dt><MdxJumpAnchor id="gl-operator-key"><a href="#gl-operator-key">Operator key</a></MdxJumpAnchor></dt>
<dd>Each EUID Private Operator has an operator key that allows the private Operator Service to connect to the Core Service and Opt-Out Service and call some endpoints on it.</dd>
<dd>The operator key identifies the participant Operator to the EUID service.</dd>

<dt><MdxJumpAnchor id="gl-operator-service"><a href="#gl-operator-service">Operator Service</a></MdxJumpAnchor></dt>
<dd>A service that enables all functions of the <a href="#gl-operator">Operator</a>.</dd>
<dd>For an overview of all the EUID services, see <a href="../intro#components">Components</a>.</dd>

<dt><MdxJumpAnchor id="gl-opt-out"><a href="#gl-opt-out">Opt-out</a></MdxJumpAnchor></dt>
<dd>An end user who participates in the EUID ecosystem can opt out at any time by going to the <a href="https://www.transparentadvertising.eu/">Transparency and Control Portal</a>.</dd>
<dd>For details, see <a href="../intro#components">Components</a>.</dd>

<dt><MdxJumpAnchor id="gl-opt-out-service"><a href="#gl-opt-out-service">Opt-Out Service</a></MdxJumpAnchor></dt>
<dd>The Opt-Out Service is a global EUID service that manages and stores user opt-out requests.</dd>
<dd>For an overview of all the EUID services, see <a href="../intro#components">Components</a>.</dd>

</dl>

### P

<dl>

<dt><MdxJumpAnchor id="gl-participant"><a href="#gl-participant">Participant</a></MdxJumpAnchor></dt>
<dd>An entity that fulfils a key role in EUID. Participants include the following: Core Administrator, Operator, DSP, data provider, advertiser, publisher, consumer.</dd>
<dd>For details, see <a href="../intro#participants">participants</a>.</dd>

<dt><MdxJumpAnchor id="gl-personal-data"><a href="#gl-personal-data">Personal data</a></MdxJumpAnchor></dt>
<dd>In general, personal data is information that relates to an identified or identifiable individual, including name, email address, or phone number.</dd>
<dd>EUID supports email address, and translates the personal data to a value that can be used for the purpose of targeted advertising but cannot by itself be traced back to the original value.</dd>

<dt><MdxJumpAnchor id="gl-private-operator"><a href="#gl-private-operator">Private Operator</a></MdxJumpAnchor></dt>
<dd>A Private <a href="#gl-operator">Operator</a> is an entity that runs a private instance of the Operator Service. The Private Operator generates and manages EUIDs for itself, using its own resources (such as hardware) in a secure environment.</dd>
<dd>For details, see <a href="../ref-info/ref-operators-public-private">The EUID Operator</a>.</dd>

<dt><MdxJumpAnchor id="gl-private-operator-service"><a href="#gl-private-operator-service">Private Operator Service</a></MdxJumpAnchor></dt>
<dd>A private instance of the Operator Service, run by a <a href="#gl-private-operator">Private Operator</a>.</dd>

<dt><MdxJumpAnchor id="gl-public-key"><a href="#gl-public-key">Public key</a></MdxJumpAnchor></dt>
<dd>For client-side publisher integrations, the public key is one of the two values issued to publishers as their EUID credentials. For details, see <a href="../getting-started/gs-credentials#subscription-id-and-public-key">Subscription ID and Public Key</a>.</dd>

<dt><MdxJumpAnchor id="gl-public-operator"><a href="#gl-public-operator">Public Operator</a></MdxJumpAnchor></dt>
<dd>A Public <a href="#gl-operator">Operator</a> is an entity that runs a public instance of the EUID Operator Service. For example, The Trade Desk currently serves as a Public Operator for the EUID framework, available to all participants.</dd>
<dd>For details, see <a href="../ref-info/ref-operators-public-private">The EUID Operator</a>.</dd>

</dl>

### R

<dl>

<dt><MdxJumpAnchor id="gl-raw-euid"><a href="#gl-raw-euid">Raw EUID</a></MdxJumpAnchor></dt>
<dd>An unencrypted alphanumeric identifier created through the EUID APIs or SDKs with the user's <a href="#gl-personal-data">personal data</a> (email address<!--  or phone number -->) as input. The raw EUID is encrypted to create an <a href="#gl-euid-token">EUID token</a>. The raw EUID is a unique value; no two raw EUIDs are the same. Raw EUIDs, and their associated EUID tokens, are case sensitive.</dd>
<dd>For details, see <a href="../intro#euid-identifier-types">EUID Identifier Types</a>.</dd>

<dt><MdxJumpAnchor id="gl-refresh-token"><a href="#gl-refresh-token">Refresh token</a></MdxJumpAnchor></dt>
<dd>A refresh token is an opaque string that is issued along with the <a href="#gl-euid-token">EUID token</a>. It is used to refresh the EUID token, which has a limited life.</dd>
<dd>When the EUID server receives the refresh token with a request for a new EUID token, it checks for user opt-out. If the user has opted out of EUID, no new EUID token is generated.</dd>
<dd>When a new EUID token is generated and returned, a new refresh token is returned along with it. However, if the user is inactive for a long period of time, the refresh token itself expires.</dd>
</dl>

### S

<dl>

<dt><MdxJumpAnchor id="gl-salt"><a href="#gl-salt">Salt</a></MdxJumpAnchor></dt>
<dd>A string of characters that is used in the process of transforming an email address<!--  or phone number --> into a secure, opaque value that cannot by itself be traced back to the original value.</dd>
<dd>The EUID service uses salt as part of the process, along with hashing and encryption, to secure the original value. Salt is added to the input value before hashing.</dd>

<dt><MdxJumpAnchor id="gl-salted-hash"><a href="#gl-salted-hash">Salted hash</a></MdxJumpAnchor></dt>
<dd>When a <a href="#gl-salt">salt</a> value is added to the input string before applying the <a href="#gl-hash">hash</a> function, the result is a salted hash. When the input value is salted before hashing, an attacker who has the hash cannot determine the input value by trying many possible inputs to arrive at the same output.</dd>

<dt><MdxJumpAnchor id="gl-secret"><a href="#gl-secret">Secret</a></MdxJumpAnchor></dt>
<dd>See <a href="#gl-client-secret">client secret</a>.</dd>

<dt><MdxJumpAnchor id="gl-server-side"><a href="#gl-server-side">Server-side integration</a></MdxJumpAnchor></dt>
<dd>One of the UID2 <a href="#gl-integration-approaches">integration approaches</a> is to integrate entirely on the server side.</dd>
<dd>In a server-side integration, raw EUIDs or EUID tokens are generated and refreshed on the server.</dd>
<dd>For example, in a server-side integration, advertisers generate raw EUIDs on the server side to be delivered for audience targeting, and publishers generate EUID tokens on the server side for bidstream use.</dd>
<dd>An example of documentation for publisher server-side integration is <a href="../guides/custom-publisher-integration">Publisher Integration Guide, Server-Side</a>.</dd>

<dt><MdxJumpAnchor id="gl-sha-256"><a href="#gl-sha-256">SHA-256</a></MdxJumpAnchor></dt>
<dd>SHA-256 is the secure hashing algorithm that EUID uses.</dd>
<dd>SHA-256 is part of the SHA-2 family of algorithms developed by the National Institute of Standards and Technology (NIST) and the National Security Agency (NSA) to succeed SHA-1. Each algorithm is named according to the number of bits in the output, so SHA-256 has 256 bits.</dd>
<dd>For details, see <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf</a> (specification).</dd>

<dt><MdxJumpAnchor id="gl-subscription-id"><a href="#gl-subscription-id">Subscription ID</a></MdxJumpAnchor></dt>
<dd>For client-side publisher integrations, the Subscription ID is one of the two values issued to publishers as their EUID credentials. For details, see <a href="../getting-started/gs-credentials#subscription-id-and-public-key">Subscription ID and Public Key</a>.</dd>

</dl>

### T

<dl>

<dt><MdxJumpAnchor id="gl-transparency-and-control-portal"><a href="#gl-transparency-and-control-portal">Transparency and Control Portal</a></MdxJumpAnchor></dt>
<dd>The EUID Transparency and Control Portal is a user-facing website, <a href="https://www.transparentadvertising.eu/">https://www.transparentadvertising.eu/</a>, that allows consumers to opt out of EUID at any time.</dd>

</dl>

### U

<dl>

<dt><MdxJumpAnchor id="gl-uid"><a href="#gl-uid">UID</a></MdxJumpAnchor></dt>
<dd>UID is a general term used to encompass both <a href="#gl-uid2-framework">UID2</a> and <a href="#gl-euid">EUID</a>.</dd>
<dd>Since there are code components that support both UID2 and EUID, such as the server-side SDKs, the term UID is used as an umbrella term.</dd>
<dd>There are many similarities between UID2 and EUID, but they are completely separate, and their tokens are not interchangeable.</dd>

<dt><MdxJumpAnchor id="gl-uid2-framework"><a href="#gl-uid2-framework">UID2 Framework</a></MdxJumpAnchor></dt>
<dd>The Unified ID 2.0 (UID2) framework enables deterministic identity for advertising opportunities on the open internet for many participants across the advertising ecosystem. It enables logged-in experiences from publisher websites, mobile apps, and Connected TV (CTV) apps to monetize through programmatic workflows. Built as an open-source, standalone solution with its own unique namespace, the framework focuses on transparency and privacy.</dd>
<dd>UID2 operates in North America, parts of Asia, and some other regions.</dd>
<dd>There are many similarities between UID2 and EUID, but they are completely separate, and their tokens are not interchangeable.</dd>
<dd>For details, see <a href="https://unifiedid.com/docs/intro">Unified ID 2.0 Overview</a>.</dd>

<dt><MdxJumpAnchor id="gl-utc"><a href="#gl-utc">UTC</a></MdxJumpAnchor></dt>
<dd>UTC is an abbreviation for Coordinated Universal Time, also called Zulu time, which is the primary time standard in general use. UTC essentially equates to Greenwich Mean Time (GMT), but is more scientifically precise.</dd>

</dl>
