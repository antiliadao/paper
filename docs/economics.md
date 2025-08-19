# Ant Home Economic Model Detailed Explanation

## Preface: Ecological Economic Philosophy Beyond Tradition

Before delving into the specific mechanisms of Ant Home, we must first understand a fundamental question: **Why does the world need a bio-ecological economic model?**

### Fundamental Flaws of Traditional Economic Systems

Every economic system in human history, whether slavery, feudalism, capitalism, or socialism, has been built on a common assumption: **the need for "humans" to control the flow of value**.

Core problems of human-controlled economies:
- **Power corruption**: Controllers always tend to benefit themselves
- **Information asymmetry**: Natural information gap between decision-makers and participants
- **Efficiency loss**: Massive resource consumption from layers of intermediaries and management costs
- **Systemic inequality**: Rule-makers naturally hold advantageous positions

### Bio-wisdom: Ecological Reconstruction of Economic Systems

Ant Home proposes a revolutionary solution: **Liberating economic rules from human subjective will and entrusting them to the collaborative wisdom verified by nature**.

In nature, ant societies demonstrate perfect decentralized collaboration:
- **No central coordination needed**: Each ant makes optimal decisions based on local information
- **Collective intelligence emergence**: Simple individual behaviors generate complex group intelligence
- **Efficient resource allocation**: Optimal path selection through pheromone transmission
- **Crisis response mechanism**: Collective migration when facing threats, maintaining species continuity

This means:

**Organic Collaboration Contract**
```solidity
// Preset level rights, dynamically matched based on contribution
mapping(uint8 => uint256) public levelRewards; // AS1(10%) → AS6(20%)
mapping(address => uint256) public tribeBonusRate; // Tribe contribution bonus ratio
```

**Absolutely Fair Execution**
The system won't treat you differently based on who you are, where you come from, or how much you invest. Before algorithms, ants are equal.

**Completely Transparent Operation**
Every fund flow, every revenue distribution, every level assessment is permanently verifiable on the blockchain, impossible to hide.

### Organic Decentralization: Ecological Distribution of Power

Ant Home is not simply "decentralized" but **organically decentralized**:

#### Traditional "Decentralized" Project Disguises
- **Governance token voting**: Actually wealth determines power
- **Community governance**: Often manipulated by whales
- **Technical team dominance**: Developers hold actual control

#### Ant Home's Organic Decentralization
- **Level-based incentives**: Power dynamically allocated based on contribution, not wealth
- **Legion competition mechanism**: Top participants gain more rights through competition
- **Ant colony migration evolution**: System has autonomous evolution capability without human intervention
- **Algorithm automatic execution**: All operations executed by smart contracts and preset rules

### From Trust to Verification: Fundamental Paradigm Shift

**Traditional Finance Trust Model:**
"Please trust us to treat your funds fairly"

**Ant Home Verification Model:**
"No need to trust anyone, code guarantees your rights"

```javascript
// You don't need to trust our promises, just verify this code
function calculateTribeBonus(address user) public view returns (uint256) {
    uint8 level = getUserLevel(user);
    uint256 bigTribeBonus = getBigTribeRevenue(user) * 30 / 100; // Big tribe fixed 30%
    uint256 smallTribeBonus = getSmallTribeRevenue(user) * getLevelRate(level) / 100; // Small tribe by level
    return bigTribeBonus + smallTribeBonus;
}
```

### New Paradigm of Value Creation

#### Traditional Model: Zero-sum Game
- If someone makes money, someone must lose money
- Value is redistributed rather than created in exchanges
- Intermediary institutions extract large fees and management costs

#### Ant Home Model: Positive-sum Co-creation
- **Ecological network effects**: Each new participant enhances the value of the entire ecosystem
- **Contribution-driven distribution**: Value growth automatically distributed to builders through contribution algorithms
- **Zero intermediary costs**: Smart contracts eliminate rent-seeking behavior in intermediate links

### Philosophical Foundation of Economic Model

Ant Home's economic model is built on three philosophical foundations:

#### 1. Bio-fair Principle
All revenue distribution is based on nature-verified collaboration models, not human judgment:
- **Tribe contribution reward**: `bonus = big_tribe_revenue × 30% + small_tribe_revenue × level_rate`
- **Legion pool distribution**: `share = pool × (personal_contribution / total_contribution)`  
- **Dynamic level assessment**: `level = f(direct_referrals, team_performance, active_orders)`

#### 2. Transparent Execution Principle
Every aspect of the system is transparent:
- Smart contract code is open source and verifiable
- All transaction records are verifiable on-chain
- Fund flows are monitored in real-time

#### 3. Autonomous Participation Principle
No coercion:
- Free choice of participation level
- Autonomous decision on participation duration
- Can exit the system at any time

---

## Bridge Between Concept and Implementation

Understanding these philosophical foundations, let's see how Ant Home translates these abstract concepts into specific operational economic mechanisms.

The following four core systems are not independent functional modules, but different expressions of the same concept:

- **Co-building Value System**: Ecologizing value creation
- **Tribe Network System**: Institutionalizing cooperation incentives
- **Legion Competition Mechanism**: Distributing governance power
- **Ant Colony Migration Mechanism**: Automating system evolution

Every mechanism design embodies the core principles of "bio-wisdom" and "organic decentralization".

---

## System Overview

Ant Home is a decentralized ecological co-building network based on BSC chain, implementing organic flow and distribution of value through smart contracts. The system adopts a "deploy once, evolve organically" design philosophy, ensuring transparent rules and sustainable development.

### Core Mechanisms
- **Co-building Value System**: Three levels of ecological construction choices
- **Tribe Network System**: Multi-layer incentive system based on referral relationships  
- **Legion Competition Mechanism**: Weekly selection of top 36 value contributors
- **Ant Colony Migration Mechanism**: Automatic system risk management and value inheritance

---

## I. Co-building Value System

### Co-building Level Details

| Level | Identity | Value Input | Co-building Cycle | Value Return | Amplification Rate | Preset Daily Return | Unlocked Permissions |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Ao** | Rookie Ant | 50 USDT | T+1 day | 50.25 USDT | 0.5% | 0.25 USDT | No tribe contribution reward |
| **Am** | Builder Ant | 500 USDT | T+7 days | 525 USDT | 5% | 7.14 USDT | Big tribe 30%+Small tribe 3% |
| **AS** | Elite Ant | 2000 USDT | T+15 days | 2300 USDT | 15% | 20 USDT | Big tribe 30%+Small tribe 6% |

### Identity Conversion Rules

Ant Home adopts a dynamic identity system ensuring rights match contributions in real-time:

**Identity Acquisition Mechanism**:
- Immediately obtain corresponding identity (Ao/Am/AS) after creating co-building order
- Automatically become Ob observer ant after co-building order expires
- In Ob state, creating new co-building order immediately restores corresponding identity
- Only one active co-building order allowed at the same time

**Ob Observer Ant Special Notes**:
- Trigger condition: Becomes Ob state after co-building order expires
- Rights status: No revenue, no tribe contribution reward
- Referral qualification: Can still serve as referrer (tribe relationship permanently retained)
- Recovery method: Creating new co-building order immediately obtains corresponding identity

### Important Rules
1. **Single Co-building Limit**: Each address can only hold one active co-building order at a time
2. **Value Release Mechanism**: Manual claim required after co-building completion, counted into network value after claiming
3. **Pre-calculation Model**: All co-building returns determined at contract deployment, completely transparent and predictable

---

## II. Tribe Network Incentive Mechanism

### Tribe Level System

![Tribe Network AS6](/images/economics/as6.png)

![Tribe Network AS1](/images/economics/as1.png)

Ant Home establishes a contribution-based dynamic level system to incentive participants' continuous ecological construction:

| Level | Title | Promotion Conditions | Big Tribe Rights | Small Tribe Rights |
|:---:|:---:|:-------:|:----------:|:----------:|
| **AS** | Elite Ant | Co-build AS order | 30% | 6% |
| **AS1** | Tribe Captain | Self AS + direct referral 6 AS | 30% | 10% |
| **AS2** | Tribe Elder | Self AS1 + 1 direct referral reaching AS1 | 30% | 12% |
| **AS3** | Tribe Chief | Self AS1 + 2 direct referrals reaching AS1 | 30% | 14% |
| **AS4** | Tribe Chieftain | Self AS1 + 3 direct referrals reaching AS1 | 30% | 16% |
| **AS5** | Tribe Commander | Self AS1 + 4 direct referrals reaching AS1 | 30% | 18% |
| **AS6** | Tribe Marshal | Self AS1 + 5 direct referrals reaching AS1 | 30% | 20% |

### Tribe Division Rules

![Tribe Division](/images/economics/tride.png)

The system automatically divides participants' referral networks into two types of tribes:

**Big Tribe (Core Tribe)**
- Definition: The line with highest contribution in direct referral network
- Calculation: Total value of all active co-building orders in that line
- Reward basis: Only counts personal preset daily return of that line's root user

**Small Tribe (Collaboration Tribe)**  
- Definition: All other direct referral lines except big tribe
- Calculation: Total value of active co-building orders in all other lines
- Reward basis: Total preset daily returns of all small tribe line users

### Tribe Contribution Reward Calculation Formula

**Big Tribe Contribution Sharing**
- Contribution base: Daily preset return of big tribe direct referrer's personal contribution (not entire line)
- Contribution ratio: 30% (unified for all levels)
- Example: Big tribe root user participates 2000 USDT (AS level), daily return 20 USDT, you get 6 USDT/day

**Small Tribe Contribution Sharing**
- Contribution base: Total daily preset returns of all small tribe line participants
- Contribution ratio: Determined by level (AS:6%, AS1:10%, AS2:12%, AS3:14%, AS4:16%, AS5:18%, AS6:20%)
- Example: Small tribe total daily return 500 USDT, AS6 level gets 100 USDT/day

### Level Assessment Mechanism
- **Assessment time**: Daily unified assessment at 22:30
- **Effective time**: Takes effect immediately after assessment
- **Assessment basis**: Based on tribe network active status at 22:30
- **Dynamic adjustment**: Only counts users with active co-building orders
- **Independent determination**: Each level independently determined, no need for gradual promotion

### Real-time Value Flow Description
1. Tribe division based on real-time active co-building order value contributions, dynamically adjusted
2. Participant's value contribution immediately removed from network after completing co-building
3. Participant's value contribution immediately added to network calculation after creating new co-building

---

## III. Legion Competition Value Distribution

### Selection Standards and Process

| Selection Dimension | Specific Standards | Update Frequency |
|----------|----------|----------|
| **Basic Qualification** | Must reach AS6 level with active co-building order | Real-time check |
| **Assessment Indicator** | Small tribe total performance ranking | Daily update at 23:30 |
| **Legion Size** | Top 36 AS6 users network-wide | Fixed quota |
| **Official Selection** | Confirm this week's legion members every Monday 01:00 | Weekly confirmation |

**Small Tribe Total Performance Calculation**: Total amount of active co-building orders in all small tribe lines

### Legion Pool Source and Distribution

**Pool Composition and Distribution Schedule**:

| Time Point | Operation Content | Calculation Basis |
|----------|----------|----------|
| **Daily 23:00** | Pool accumulation | 20% of total preset daily returns of all active co-building orders network-wide |
| **Monday to Sunday** | 7-day accumulation cycle | Continuous accumulation to weekly pool |
| **Every Monday 01:00** | Pool distribution | Weighted distribution according to 36 legion members' small tribe performance proportion |

### Distribution Calculation Example
```
Legion Personal Reward = Weekly Legion Pool Total × (Personal Small Tribe Value Contribution ÷ 36 People Small Tribe Value Contribution Total)

Example Calculation:
- Weekly Legion Pool: 100,000 USDT
- Personal Small Tribe Contribution: 500,000 USDT  
- 36 People Total Contribution: 10,000,000 USDT
- Personal Reward: 100,000 × (500,000 ÷ 10,000,000) = 5,000 USDT
```

---

## IV. Ant Colony Migration Mechanism

### Trigger Conditions and Detection Mechanism

**Migration Trigger Logic**:
- **Check timing**: When first user executes withdrawal operation after 00:00 daily
- **Trigger condition**: Home reserve vault < total amount of co-building orders expiring at 00:00
- **System response**: Immediately lock for 3 days after migration trigger

### Migration Process Details

#### Phase 1: System Lock (3 days)
- System enters protection period, suspending all value inflow and outflow operations
- Record last 36 AS identity co-building orders (in reverse chronological order of creation)
- Announce migration information, prepare value inheritance

#### Phase 2: Value Inheritance Distribution

**Fund Distribution Ratio Table**:

| Distribution Item | Distribution Ratio | Beneficiaries | Distribution Method |
|----------|----------|----------|----------|
| **Migration Pioneer Award** | 10% | Last 36 AS identity participants | Equal distribution, immediate issuance |
| **New Nest Construction Award** | 90% | Top 36 in new cycle legion ranking | Distributed in 4 phases of selection |

#### Phase 3: New Cycle Launch
- System reset, opening new co-building cycle
- All participants can restart value co-building
- Tribe relationships and user IDs completely preserved

### New Nest Construction Plan

In the new cycle, 90% of inherited value will be distributed through 4 selections:

| Selection Phase | Selection Time | Distribution Ratio | Distribution Basis | Selection Criteria |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **Phase 1** | Week 4 | 10% of total fund | Week 4 legion ranking | Top 36 small tribe value contributors that week |
| **Phase 2** | Week 8 | 20% of total fund | Week 8 legion ranking | Top 36 small tribe value contributors that week |
| **Phase 3** | Week 12 | 30% of total fund | Week 12 legion ranking | Top 36 small tribe value contributors that week |
| **Phase 4** | Week 16 | 40% of total fund | Week 16 legion ranking | Top 36 small tribe value contributors that week |

**Important Note**: Each selection conducted independently, based on that week's real-time value contribution, not cumulative contribution

### Post-Migration System Processing

**Data Reset Scope**:
- All user identities reset to Ob observer ant
- All level records cleared
- All historical performance cleared
- All legion rankings cleared
- All reward balances cleared

**Data Retention Scope**:
- User IDs permanently retained
- Tribe relationships completely preserved

**Post-Restart Processing Flow**:
- System locked for 3-day maintenance period
- Old users need not re-register, can directly co-build to activate
- Next day 22:30 recalculate levels based on tribe network

---

## V. Co-building Revenue Period Rules

### T+N Co-building Cycle Calculation

**Time Calculation Standards**:

| Time Point | Status Description | Revenue Situation |
|----------|----------|----------|
| **T Day** | Co-building creation day | No revenue generated |
| **T+1 to T+N** | Normal revenue period | Generates tribe contribution sharing |
| **After T+N Day** | Co-building completed | Stops generating revenue |

### Revenue Period Example

**AS Level Co-building Cycle Example**:
```
Creation time: Day1 10:00 (example)
T+0 period: Day0 10:00-23:59 (creation day, no revenue generated)
T+1 start: Day1 00:00 (second day starts generating revenue)
Order expiry: Day16 00:00 (after T+15 days)

Revenue period: Day1 00:00 to Day15 23:59
Revenue days: 15 days
```

### Important Notes
1. **Revenue generation condition**: All tribe contribution sharing only generated during subordinate co-building orders' revenue period
2. **Status impact**: In completed but unclaimed co-building status, not counted in any value contribution and network calculation
3. **Continuous participation**: Participants must claim completed co-building and recreate to continue participating in value flow

---

## VI. Technical Parameters

### On-chain Technical Specifications

| Technical Dimension | Specific Parameters | Description |
|----------|----------|------|
| **Blockchain** | BSC (Binance Smart Chain) | High performance, low fees |
| **Token Standard** | USDT (BEP-20) | Stablecoin, reduces volatility risk |
| **Gas Fees** | User bears cost, approximately 0.001-0.003 BNB/transaction | Transparent operation cost |
| **Contract Features** | Non-upgradeable, no admin privileges | Ensures decentralization |

### Time Standard Specifications

| Time Type | Standard Setting | Application Scenario |
|----------|----------|----------|
| **Unified Time Zone** | UTC+8 (Singapore Time) | Global unified standard |
| **Daily Settlement Time** | Daily 23:00 | Tribe contribution reward distribution |
| **Level Assessment Time** | Daily 22:30 | Level status update |
| **Weekly Settlement Time** | Every Monday 01:00 | Legion pool distribution |

---

## VII. Participation Process

### Basic Operation Process

**Preparation Phase Operation Checklist**:
1. Prepare BSC chain USDT
2. Prepare small amount of BNB for Gas fees
3. Connect BSC-supporting wallet (like MetaMask)

**Co-building Phase Operation Steps**:
1. Choose co-building level (Ao/Am/AS)
2. Call contract createOrder function
3. Transfer USDT to home reserve vault
4. Confirm transaction completion

**Harvesting Phase Operation Guide**:
1. Wait for co-building cycle completion
2. Call claimOrder function to claim return
3. Decide whether to continue participating in co-building

### Ecological Construction Strategy

**Tribe Network Construction Key Points**:
1. **Prioritize developing high-quality direct referrals**: Choose partners who understand the project and have execution capability
2. **Form stable big and small tribe structure**: Balance big tribe depth and small tribe breadth
3. **Maintain long-term cooperative relationships**: Tribe relationships are permanent and need careful maintenance

**Level Promotion Planning**:
1. **Novice period**: Recommend starting from Am level to familiarize with mechanisms
2. **Development period**: Upgrade to AS level, start building tribe network
3. **Mature period**: Strive for AS6 level, participate in legion competition

**Legion Competition Strategy**:
1. **Focus on small tribe total value contribution ranking**: This is the core indicator for legion selection
2. **Balance development of multiple referral lines**: Avoid over-dependence on single big tribe
3. **Maintain continuous activity**: Ensure own and team's co-building orders remain active

---

## VIII. Risk Warning

### Technical Operation Risks

| Risk Type | Risk Description | Prevention Measures |
|----------|----------|----------|
| **Address Error** | Wrong transfer address causing fund loss | Multiple address confirmations, use address book |
| **Private Key Loss** | Private key loss will permanently lose account control | Secure backup, multiple custody |
| **Phishing Risk** | Fake official websites or contract addresses | Only access through official channels |

### System Mechanism Risks

**Ant Colony Migration Risk**:
- Risk description: System enters migration period when reserve vault funds insufficient
- Impact scope: 3-day lock period, suspend all operations
- Compensation mechanism: Migration pioneer award and new nest construction award

**Level Fluctuation Risk**:
- Risk description: Level assessment based on real-time contribution, possible level decline
- Influencing factors: Team member order expiry, referral network activity decline
- Response strategy: Maintain team activity, timely communication for renewal

**Legion Elimination Risk**:
- Risk description: Legion members based on competitive ranking, possibility of elimination
- Competition intensity: Only top 36 AS6 users can enjoy legion rewards
- Retention strategy: Continuously expand small tribe scale, improve competitiveness

---

## IX. Professional Terminology Explanation

### Core Concept Terms

| Term | Definition | Application Scenario |
|------|------|----------|
| **Active Co-building Order** | Co-building order created but not completed or unclaimed | Basic data for various calculations |
| **Referral Line** | Entire subordinate network branch starting from a direct referrer | Basic unit for tribe division |
| **Real-time Value Contribution** | Total value of all current active co-building orders | Basis for level assessment and ranking |
| **Co-building Revenue Period** | Time period from day 2 after order creation to expiry date | Period when tribe contribution rewards generated |

### System Mechanism Terms

| Term | Definition | Importance |
|------|------|--------|
| **Migration Pioneer** | Last 36 AS identity participants before ant colony migration | Receive 10% pioneer reward |
| **Preset Daily Return** | Fixed daily return amount corresponding to each level | Basis for all reward calculations |
| **Tribe Contribution Reward** | Layered incentive mechanism based on referral network | Main revenue source |
| **Legion Pool** | Competitive reward pool for top participants | AS6 level exclusive reward |

### Governance Related Terms

- **Level Assessment**: Dynamic level calculation based on tribe network status daily at 22:30
- **Legion Competition**: Ranking competition among AS6 level users based on small tribe contribution
- **Ant Colony Migration**: Automatic risk management and evolution mechanism when system funds insufficient
- **New Nest Construction**: Value inheritance and incentive plan for new cycle after migration

---

## X. Security Verification

### Official Information Verification

**Contract Address Verification**:
- Only obtain contract addresses through official channels
- Verify contract code on BSCScan
- Confirm contract functions match documentation description

**Information Source Verification**:
- Follow official announcement channels
- Beware of fake websites and phishing links
- Verify information publisher identity

### Security Operation Recommendations

**Wallet Security**:
- Use hardware wallets or reputable software wallets
- Regularly backup private keys and mnemonic phrases
- Do not perform sensitive operations on public networks

**Transaction Security**:
- Carefully check all parameters before transactions
- Set reasonable Gas limits
- Keep transaction records for reference
