# kickstart
**Campaign Contract:**
to solve the trust problems of kickstarter issues by using smart contract  

## Campaign Contract Design
### **Variables**
| Name | Type | Purpose |
| --- | --- | --- |
| manager | address | address of the person who is managing this campaign |
| minimumContribution | uint | Minimum donation required to be considered a contributor or 'approver' |
| approvers | mapping | List of addresses for every person who has donated money |
| requests | Request[] | List of requests that the manager has created. | 

### **Functions**
| Name | Purpose |
| --- | --- |
| Campaign | Constructor function that sets the minimumContribution and the Owner |
| contribute | Called when someone wants to donate money to the campaign and become an 'approver' |
| createRequest | Called by the manager to create a new 'spending' reqeust |
| approveRequest | Called by each contributor to approve a spending request |
| finalizeRequest | After a request has gotten enough approvals, the manager can call this to get money sent to the vendor | 

### Request Struct
| Name | Type | Purpose |
| --- | --- | --- |
| description | string | Describes why the request is being created |
| value | uint | Amount of money that the manager wants to send to the vendor |
| recipient | address | Address that the money will be sent to. |
| complete | bool | True if the request has already been processed (money sent) |
| approvals | mapping | Track who has voted |
| approvalCount | uint | Track number of approvals |