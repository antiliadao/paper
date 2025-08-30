# Giải thích Chi tiết Mô hình Kinh tế Nhà Kiến

## Lời mở đầu: Triết lý Kinh tế Sinh thái Vượt qua Truyền thống

Trước khi đi sâu tìm hiểu các cơ chế cụ thể của Nhà Kiến, chúng ta phải hiểu một vấn đề căn bản: **Tại sao thế giới cần một mô hình kinh tế mô phỏng sinh thái?**

### Khuyết điểm Căn bản của Hệ thống Kinh tế Truyền thống

Mọi chế độ kinh tế trong lịch sử loài người, dù là chế độ nô lệ, phong kiến, tư bản chủ nghĩa hay xã hội chủ nghĩa, đều được xây dựng trên một giả định chung: **cần có "con người" để kiểm soát dòng chảy giá trị**.

Vấn đề cốt lõi của kinh tế nhân trị này:
- **Tham nhũng quyền lực**: Người kiểm soát luôn có xu hướng tư lợi
- **Bất đối xứng thông tin**: Tồn tại khoảng cách thông tin tự nhiên giữa người ra quyết định và người tham gia
- **Mất mát hiệu quả**: Chi phí trung gian và quản lý nhiều tầng tiêu tốn tài nguyên khổng lồ
- **Bất công hệ thống**: Người làm luật tự nhiên ở vị trí ưu thế

### Trí tuệ Mô phỏng Sinh thái: Tái cấu trúc Sinh thái của Chế độ Kinh tế

Nhà Kiến đề xuất một giải pháp cách mạng: **Giải phóng các quy tắc kinh tế khỏi ý chí chủ quan của con người, giao cho trí tuệ hợp tác đã được tự nhiên kiểm chứng**.

Trong tự nhiên, xã hội kiến thể hiện mô hình hợp tác phi tập trung hoàn hảo:
- **Không cần điều phối trung ương**: Mỗi con kiến đưa ra quyết định tối ưu dựa trên thông tin địa phương
- **Trí tuệ tập thể nổi lên**: Hành vi đơn giản của cá thể tạo ra trí tuệ quần thể phức tạp
- **Phân bổ tài nguyên hiệu quả**: Thực hiện lựa chọn đường đi tối ưu thông qua truyền tải pheromone
- **Cơ chế ứng phó khủng hoảng**: Di cư tập thể khi đối mặt với đe dọa, duy trì sự tiếp nối của quần thể

Điều này có nghĩa là:

**Hợp đồng Hợp tác Hữu cơ**
```solidity
// Quyền lợi cấp độ thiết lập sẵn, khớp động dựa trên đóng góp
mapping(uint8 => uint256) public levelRewards; // AS1(10%) → AS6(20%)
mapping(address => uint256) public tribeBonusRate; // Tỷ lệ thưởng đóng góp bộ tộc
```

**Thực thi Công bằng Tuyệt đối**
Hệ thống sẽ không phân biệt đối xử dựa trên bạn là ai, từ đâu đến, đầu tư bao nhiều. Trước thuật toán, kiến đều bình đẳng.

**Vận hành Hoàn toàn Minh bạch**
Mọi dòng chảy tài chính, mọi phân phối lợi nhuận, mọi đánh giá cấp độ đều có thể kiểm tra vĩnh viễn trên blockchain, không thể che giấu.

### Phi tập trung Hữu cơ: Phân bổ Sinh thái của Quyền lực

Nhà Kiến không đơn giản là "phi tập trung" mà là **phi tập trung hữu cơ**:

#### Ngụy trang của Dự án "Phi tập trung" Truyền thống
- **Bỏ phiếu token quản trị**: Thực tế là tài sản quyết định quyền lực
- **Quản trị cộng đồng**: Thường bị thao túng bởi cá voi
- **Nhóm kỹ thuật chủ đạo**: Nhà phát triển nắm quyền kiểm soát thực tế

#### Phi tập trung Hữu cơ của Nhà Kiến
- **Khuyến khích theo cấp bậc**: Quyền lực được phân bổ động dựa trên đóng góp, không phải số lượng tài sản
- **Cơ chế cạnh tranh quân đoàn**: Người tham gia hàng đầu có được thêm quyền lợi thông qua cạnh tranh
- **Tiến hóa di cư đàn kiến**: Hệ thống có khả năng tiến hóa tự chủ, không cần can thiệp nhân tạo
- **Thuật toán tự động thực thi**: Mọi thao tác đều được thực hiện bởi smart contract và quy tắc thiết lập sẵn

### Từ Tin tưởng đến Xác minh: Chuyển đổi Mô hình Căn bản

**Mô hình Tin tưởng của Tài chính Truyền thống:**
"Hãy tin rằng chúng tôi sẽ đối xử công bằng với tiền của bạn"

**Mô hình Xác minh của Nhà Kiến:**
"Không cần tin tưởng ai, code sẽ đảm bảo quyền lợi của bạn"

```javascript
// Bạn không cần tin tưởng lời hứa của chúng tôi, chỉ cần xác minh đoạn code này
function calculateTribeBonus(address user) public view returns (uint256) {
    uint8 level = getUserLevel(user);
    uint256 bigTribeBonus = getBigTribeRevenue(user) * 30 / 100; // Đại bộ tộc cố định 30%
    uint256 smallTribeBonus = getSmallTribeRevenue(user) * getLevelRate(level) / 100; // Tiểu bộ tộc theo cấp độ
    return bigTribeBonus + smallTribeBonus;
}
```

### Mô hình Mới của Sáng tạo Giá trị

#### Mô hình Truyền thống: Trò chơi Tổng bằng Không
- Có người kiếm tiền, chắc chắn có người thua lỗ
- Giá trị được phân phối lại trong trao đổi, không được tạo ra
- Cơ quan trung gian trích xuất phí dịch vụ và phí quản lý lớn

#### Mô hình Nhà Kiến: Đồng sáng tạo Tổng dương
- **Hiệu ứng mạng sinh thái**: Mỗi người tham gia mới đều tăng cường giá trị của toàn bộ sinh thái
- **Phân phối theo đóng góp**: Tăng trưởng giá trị được phân phối tự động cho người xây dựng thông qua thuật toán đóng góp
- **Chi phí trung gian bằng không**: Smart contract loại bỏ hành vi tìm kiếm lợi nhuận ở khâu trung gian

### Nền tảng Triết học của Mô hình Kinh tế

Mô hình kinh tế của Nhà Kiến được xây dựng trên ba nền tảng triết học:

#### 1. Nguyên tắc Công bằng Mô phỏng Sinh thái
Tất cả phân phối lợi nhuận đều dựa trên mô hình hợp tác đã được tự nhiên kiểm chứng, không phải phán đoán nhân tạo:
- **Thưởng đóng góp bộ tộc**: `bonus = big_tribe_revenue × 30% + small_tribe_revenue × level_rate`
- **Phân phối pool quân đoàn**: `share = pool × (personal_contribution / total_contribution)`  
- **Đánh giá cấp độ động**: `level = f(direct_referrals, team_performance, active_orders)`

#### 2. Nguyên tắc Thực thi Minh bạch
Mọi khâu của hệ thống đều minh bạch:
- Code smart contract mã nguồn mở có thể xác minh
- Tất cả bản ghi giao dịch có thể kiểm tra trên chuỗi
- Dòng chảy tài chính được giám sát thời gian thực

#### 3. Nguyên tắc Tham gia Tự chủ
Không có bất kỳ cưỡng bức nào:
- Tự do lựa chọn cấp độ tham gia
- Tự chủ quyết định thời gian tham gia
- Có thể thoát khỏi hệ thống bất kỳ lúc nào

---

## Cầu nối giữa Lý niệm và Thực hiện

Sau khi hiểu những nền tảng triết học này, hãy xem Nhà Kiến chuyển đổi những lý niệm trừu tượng này thành cơ chế kinh tế cụ thể có thể vận hành như thế nào.

Bốn hệ thống cốt lõi sau đây không phải là các mô-đun chức năng độc lập, mà là những biểu hiện khác nhau của cùng một lý niệm:

- **Hệ thống Giá trị Đồng xây dựng**: Sinh thái hóa sáng tạo giá trị
- **Hệ thống Mạng Bộ tộc**: Thể chế hóa khuyến khích hợp tác
- **Cơ chế Cạnh tranh Quân đoàn**: Phân tán hóa quyền lực quản trị
- **Cơ chế Di cư Đàn kiến**: Tự động hóa tiến hóa hệ thống

Thiết kế của mỗi cơ chế đều thể hiện nguyên tắc cốt lõi của "trí tuệ mô phỏng sinh thái" và "phi tập trung hữu cơ".

---

## Tổng quan Hệ thống

Nhà Kiến là mạng đồng xây dựng sinh thái phi tập trung dựa trên chuỗi BSC, thực hiện dòng chảy và phân phối hữu cơ của giá trị thông qua smart contract. Hệ thống áp dụng lý niệm thiết kế "triển khai một lần, tiến hóa hữu cơ", đảm bảo quy tắc minh bạch và phát triển bền vững.

### Cơ chế Cốt lõi
- **Hệ thống Giá trị Đồng xây dựng**: Ba cấp độ lựa chọn xây dựng sinh thái
- **Hệ thống Mạng Bộ tộc**: Hệ thống khuyến khích đa tầng dựa trên quan hệ giới thiệu  
- **Cơ chế Cạnh tranh Quân đoàn**: Hàng tuần tuyển chọn 36 người đóng góp giá trị hàng đầu
- **Cơ chế Di cư Đàn kiến**: Quản lý rủi ro tự động của hệ thống và kế thừa giá trị

---

## I. Hệ thống Giá trị Đồng xây dựng

### Chi tiết Cấp độ Đồng xây dựng

| Cấp độ | Danh tính | Đầu tư Giá trị | Chu kỳ Đồng xây dựng | Hoàn trả Giá trị | Tỷ lệ Phóng đại | Lợi nhuận Ngày Thiết lập sẵn | Quyền Mở khóa |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Ao** | Kiến Tân thủ | 50 USDT | T+1 ngày | 50.25 USDT | 0.5% | 0.25 USDT | Không có thưởng đóng góp bộ tộc |
| **Am** | Kiến Xây dựng | 500 USDT | T+7 ngày | 525 USDT | 5% | 3.57 USDT | Đại bộ tộc 30%+Tiểu bộ tộc 3% |
| **AS** | Kiến Tinh anh | 2000 USDT | T+15 ngày | 2300 USDT | 15% | 20 USDT | Đại bộ tộc 30%+Tiểu bộ tộc 6% |

### Quy tắc Chuyển đổi Danh tính

Nhà Kiến áp dụng hệ thống danh tính động, đảm bảo quyền lợi khớp với đóng góp theo thời gian thực:

**Cơ chế Đạt được Danh tính**:
- Ngay lập tức có được danh tính tương ứng (Ao/Am/AS) sau khi tạo đơn hàng đồng xây dựng
- Tự động trở thành kiến quan sát Ob sau khi đơn hàng đồng xây dựng hết hạn
- Trong trạng thái Ob, tạo đơn hàng đồng xây dựng mới sẽ ngay lập tức khôi phục danh tính tương ứng
- Cùng một thời điểm chỉ có thể có một đơn hàng đồng xây dựng hoạt động

**Giải thích Đặc biệt về Kiến quan sát Ob**:
- Điều kiện kích hoạt: Sau khi đơn hàng đồng xây dựng hết hạn sẽ chuyển thành trạng thái Ob
- Trạng thái quyền lợi: Không có lợi nhuận nào, không có thưởng đóng góp bộ tộc
- Tư cách giới thiệu: Vẫn có thể làm người giới thiệu (quan hệ bộ tộc được giữ vĩnh viễn)
- Cách khôi phục: Tạo đơn hàng đồng xây dựng mới để ngay lập tức có được danh tính tương ứng

### Quy tắc Quan trọng
1. **Giới hạn Đồng xây dựng Đơn lẻ**: Mỗi địa chỉ chỉ có thể giữ một đơn hàng đồng xây dựng hoạt động cùng lúc
2. **Cơ chế Giải phóng Giá trị**: Sau khi hoàn thành đồng xây dựng cần nhận thủ công, sau khi nhận sẽ được tính lại vào giá trị mạng
3. **Mô hình Tính toán Trước**: Tất cả hoàn trả đồng xây dựng đã được xác định khi triển khai hợp đồng, hoàn toàn minh bạch và có thể dự đoán

---

## II. Cơ chế Khuyến khích Mạng Bộ tộc

### Hệ thống Cấp độ Bộ tộc

![Mạng Bộ tộc AS6](/images/economics/as6.png)

![Mạng Bộ tộc AS1](/images/economics/as1.png)

Nhà Kiến thiết lập chế độ cấp độ động dựa trên đóng góp, khuyến khích người tham gia xây dựng sinh thái liên tục:

| Cấp độ | Danh hiệu | Điều kiện Thăng tiến | Quyền lợi Đại bộ tộc | Quyền lợi Tiểu bộ tộc |
|:---:|:---:|:-------:|:----------:|:----------:|
| **AS** | Kiến Tinh anh | Đồng xây dựng đơn hàng AS | 30% | 6% |
| **AS1** | Đội trưởng Bộ tộc | Bản thân AS + trực tiếp giới thiệu 6 AS | 30% | 10% |
| **AS2** | Trưởng lão Bộ tộc | Bản thân AS1 + 1 người trong trực tiếp giới thiệu đạt AS1 | 30% | 12% |
| **AS3** | Thủ lĩnh Bộ tộc | Bản thân AS1 + 2 người trong trực tiếp giới thiệu đạt AS1 | 30% | 14% |
| **AS4** | Tù trưởng Bộ tộc | Bản thân AS1 + 3 người trong trực tiếp giới thiệu đạt AS1 | 30% | 16% |
| **AS5** | Thống lĩnh Bộ tộc | Bản thân AS1 + 4 người trong trực tiếp giới thiệu đạt AS1 | 30% | 18% |
| **AS6** | Nguyên soái Bộ tộc | Bản thân AS1 + 5 người trong trực tiếp giới thiệu đạt AS1 | 30% | 20% |

### Quy tắc Phân chia Bộ tộc

![Phân chia Bộ tộc](/images/economics/tride.png)

Hệ thống tự động chia mạng giới thiệu của người tham gia thành hai loại bộ tộc:

**Đại Bộ tộc (Bộ tộc Cốt lõi)**
- Định nghĩa: Tuyến có đóng góp cao nhất trong mạng giới thiệu trực tiếp
- Tính toán: Tổng giá trị của tất cả đơn hàng đồng xây dựng hoạt động trong tuyến đó
- Cơ sở thưởng: Chỉ tính lợi nhuận ngày thiết lập sẵn cá nhân của người dùng gốc tuyến đó

**Tiểu Bộ tộc (Bộ tộc Hợp tác)**  
- Định nghĩa: Tất cả các tuyến giới thiệu trực tiếp khác ngoài đại bộ tộc
- Tính toán: Tổng giá trị đơn hàng đồng xây dựng hoạt động của tất cả các tuyến khác
- Cơ sở thưởng: Tổng lợi nhuận ngày thiết lập sẵn của tất cả người dùng tuyến tiểu bộ tộc

### Công thức Tính Thưởng Đóng góp Bộ tộc

**Chia sẻ Đóng góp Đại bộ tộc**
- Cơ số đóng góp: Lợi nhuận thiết lập sẵn hàng ngày cá nhân của người được giới thiệu trực tiếp đại bộ tộc (không phải toàn bộ tuyến)
- Tỷ lệ đóng góp: 30% (thống nhất tất cả cấp độ)
- Ví dụ: Người dùng gốc đại bộ tộc tham gia 2000 USDT (cấp AS), lợi nhuận ngày 20 USDT, bạn nhận được 6 USDT/ngày

**Chia sẻ Đóng góp Tiểu bộ tộc**
- Cơ số đóng góp: Tổng lợi nhuận thiết lập sẵn hàng ngày của tất cả người tham gia tuyến tiểu bộ tộc
- Tỷ lệ đóng góp: Xác định theo cấp độ (AS:6%, AS1:10%, AS2:12%, AS3:14%, AS4:16%, AS5:18%, AS6:20%)
- Ví dụ: Tổng lợi nhuận ngày tiểu bộ tộc 500 USDT, cấp AS6 nhận được 100 USDT/ngày

### Cơ chế Đánh giá Cấp độ
- **Thời gian đánh giá**: Thống nhất đánh giá hàng ngày lúc 22:30
- **Thời gian có hiệu lực**: Có hiệu lực ngay sau khi đánh giá
- **Căn cứ đánh giá**: Dựa trên trạng thái hoạt động mạng bộ tộc vào thời điểm 22:30
- **Điều chỉnh động**: Chỉ thống kê người dùng có đơn hàng đồng xây dựng hoạt động
- **Phán định độc lập**: Mỗi cấp độ được phán định độc lập, không cần thăng tiến từng bước

### Giải thích Dòng chảy Giá trị Thời gian thực
1. Phân chia bộ tộc dựa trên đóng góp giá trị đơn hàng đồng xây dựng hoạt động thời gian thực, điều chỉnh động
2. Sau khi người tham gia hoàn thành đồng xây dựng, đóng góp giá trị của họ sẽ ngay lập tức được loại bỏ khỏi mạng
3. Sau khi người tham gia tạo đồng xây dựng mới, đóng góp giá trị của họ sẽ ngay lập tức được thêm vào tính toán mạng

---

## III. Phân phối Giá trị Cạnh tranh Quân đoàn

### Tiêu chuẩn Tuyển chọn và Quy trình

| Khía cạnh Tuyển chọn | Tiêu chuẩn Cụ thể | Tần suất Cập nhật |
|----------|----------|----------|
| **Tư cách Cơ bản** | Phải đạt cấp độ AS6 và có đơn hàng đồng xây dựng hoạt động | Kiểm tra thời gian thực |
| **Chỉ số Đánh giá** | Xếp hạng tổng thành tích tiểu bộ tộc | Cập nhật hàng ngày lúc 23:30 |
| **Quy mô Quân đoàn** | 36 người dùng AS6 hàng đầu toàn mạng | Hạn ngạch cố định |
| **Tuyển chọn Chính thức** | Xác định thành viên quân đoàn tuần này vào 01:00 thứ Hai hàng tuần | Xác nhận hàng tuần |

**Tính toán Tổng thành tích Tiểu bộ tộc**: Tổng số tiền đơn hàng đồng xây dựng hoạt động của tất cả tuyến tiểu bộ tộc

### Nguồn gốc và Phân phối Pool Quân đoàn

**Thành phần Pool và Lịch trình Phân phối**:

| Điểm Thời gian | Nội dung Thao tác | Cơ sở Tính toán |
|----------|----------|----------|
| **Hàng ngày 23:00** | Tích lũy pool | 20% tổng lợi nhuận ngày thiết lập sẵn đơn hàng đồng xây dựng hoạt động toàn mạng |
| **Thứ Hai đến Chủ nhật** | Chu kỳ tích lũy 7 ngày | Tích lũy liên tục vào pool tuần |
| **Thứ Hai hàng tuần 01:00** | Phân phối pool | Phân phối có trọng số theo tỷ lệ thành tích tiểu bộ tộc của 36 thành viên quân đoàn |

### Ví dụ Tính toán Phân phối
```
Thưởng Cá nhân Quân đoàn = Tổng Pool Quân đoàn Tuần × (Đóng góp Giá trị Tiểu bộ tộc Cá nhân ÷ Tổng Đóng góp Giá trị Tiểu bộ tộc 36 người)

Ví dụ Tính toán:
- Pool Quân đoàn Tuần: 100,000 USDT
- Đóng góp Tiểu bộ tộc Cá nhân: 500,000 USDT  
- Tổng Đóng góp 36 người: 10,000,000 USDT
- Thưởng Cá nhân: 100,000 × (500,000 ÷ 10,000,000) = 5,000 USDT
```

---

## IV. Cơ chế Di cư Đàn kiến

### Điều kiện Kích hoạt và Cơ chế Phát hiện

**Logic Kích hoạt Di cư**:
- **Thời điểm kiểm tra**: Khi người dùng đầu tiên thực hiện thao tác rút tiền sau 00:00 hàng ngày
- **Điều kiện kích hoạt**: Kho dự trữ nhà < tổng số tiền đơn hàng đồng xây dựng hết hạn vào thời điểm 00:00
- **Phản ứng hệ thống**: Khóa ngay 3 ngày sau khi kích hoạt di cư

### Chi tiết Quy trình Di cư

#### Giai đoạn 1: Khóa Hệ thống (3 ngày)
- Hệ thống vào giai đoạn bảo vệ, tạm dừng tất cả thao tác dòng vào và dòng ra giá trị
- Ghi lại 36 đơn hàng đồng xây dựng danh tính AS cuối cùng (theo thứ tự thời gian tạo ngược)
- Công bố thông tin di cư, chuẩn bị kế thừa giá trị

#### Giai đoạn 2: Phân phối Kế thừa Giá trị

**Bảng Tỷ lệ Phân phối Tài chính**:

| Mục Phân phối | Tỷ lệ Phân phối | Đối tượng Thụ hưởng | Cách thức Phát hành |
|----------|----------|----------|----------|
| **Thưởng Tiên phong Di cư** | 10% | 36 người tham gia danh tính AS cuối cùng | Phân chia đều, phát hành ngay |
| **Thưởng Xây dựng Tổ mới** | 90% | 36 người đứng đầu xếp hạng quân đoàn chu kỳ mới | Phát hành tuyển chọn 4 đợt |

#### Giai đoạn 3: Khởi động Chu kỳ Mới
- Hệ thống reset, mở chu kỳ đồng xây dựng mới
- Tất cả người tham gia có thể bắt đầu lại đồng xây dựng giá trị
- Quan hệ bộ tộc và ID người dùng được giữ nguyên hoàn toàn

### Kế hoạch Xây dựng Tổ mới

Trong chu kỳ mới, 90% giá trị kế thừa sẽ được phân phối qua 4 lần tuyển chọn:

| Giai đoạn Tuyển chọn | Thời gian Tuyển chọn | Tỷ lệ Phân phối | Căn cứ Phân phối | Tiêu chuẩn Tuyển chọn |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **Giai đoạn 1** | Tuần thứ 4 | 10% tổng quỹ | Xếp hạng quân đoàn tuần thứ 4 | 36 người đóng góp giá trị tiểu bộ tộc hàng đầu tuần đó |
| **Giai đoạn 2** | Tuần thứ 8 | 20% tổng quỹ | Xếp hạng quân đoàn tuần thứ 8 | 36 người đóng góp giá trị tiểu bộ tộc hàng đầu tuần đó |
| **Giai đoạn 3** | Tuần thứ 12 | 30% tổng quỹ | Xếp hạng quân đoàn tuần thứ 12 | 36 người đóng góp giá trị tiểu bộ tộc hàng đầu tuần đó |
| **Giai đoạn 4** | Tuần thứ 16 | 40% tổng quỹ | Xếp hạng quân đoàn tuần thứ 16 | 36 người đóng góp giá trị tiểu bộ tộc hàng đầu tuần đó |

**Giải thích Quan trọng**: Mỗi lần tuyển chọn tiến hành độc lập, dựa trên đóng góp giá trị thời gian thực tuần đó, không phải đóng góp tích lũy

### Xử lý Hệ thống sau Di cư

**Phạm vi Reset Dữ liệu**:
- Danh tính người dùng toàn bộ reset thành kiến quan sát Ob
- Bản ghi cấp độ toàn bộ xóa sạch
- Thành tích lịch sử toàn bộ xóa sạch
- Xếp hạng quân đoàn toàn bộ xóa sạch
- Số dư thưởng toàn bộ xóa sạch

**Phạm vi Giữ lại Dữ liệu**:
- ID người dùng giữ lại vĩnh viễn
- Quan hệ bộ tộc giữ lại hoàn toàn

**Quy trình Xử lý sau Khởi động lại**:
- Hệ thống khóa giai đoạn bảo trì 3 ngày
- Người dùng cũ không cần đăng ký lại, có thể kích hoạt trực tiếp bằng đồng xây dựng
- Ngày hôm sau 22:30 tính toán lại cấp độ dựa trên mạng bộ tộc

---

## V. Quy tắc Kỳ Lợi nhuận Đồng xây dựng

### Tính toán Chu kỳ Đồng xây dựng T+N

**Tiêu chuẩn Tính toán Thời gian**:

| Điểm Thời gian | Giải thích Trạng thái | Tình hình Lợi nhuận |
|----------|----------|----------|
| **Ngày T** | Ngày tạo đồng xây dựng | Không phát sinh lợi nhuận |
| **T+1 đến T+N** | Kỳ lợi nhuận bình thường | Phát sinh chia sẻ đóng góp bộ tộc |
| **Sau ngày T+N** | Hoàn thành đồng xây dựng | Dừng phát sinh lợi nhuận |

### Ví dụ Kỳ Lợi nhuận

**Ví dụ Chu kỳ Đồng xây dựng cấp AS**:
```
Thời gian tạo: Day0 10:00 (ví dụ)
Giai đoạn T+0: Day0 10:00-23:59 (ngày tạo, không phát sinh lợi nhuận)
Bắt đầu T+1: Day1 00:00 (ngày thứ hai bắt đầu phát sinh lợi nhuận)
Hết hạn đơn hàng: Day16 00:00 (sau T+15 ngày)

Giai đoạn lợi nhuận: Day1 00:00 đến Day15 23:59
Số ngày lợi nhuận: 15 ngày
```

### Giải thích Quan trọng
1. **Điều kiện phát sinh lợi nhuận**: Tất cả chia sẻ đóng góp bộ tộc chỉ phát sinh trong kỳ lợi nhuận của đơn hàng đồng xây dựng cấp dưới
2. **Ảnh hưởng trạng thái**: Trong trạng thái hoàn thành đồng xây dựng chưa nhận, không được tính vào bất kỳ đóng góp giá trị và tính toán mạng nào
3. **Tham gia liên tục**: Người tham gia phải nhận đồng xây dựng đã hoàn thành và tạo lại mới có thể tiếp tục tham gia dòng chảy giá trị

---

## VI. Tham số Kỹ thuật

### Thông số kỹ thuật Trên chuỗi

| Khía cạnh Kỹ thuật | Tham số Cụ thể | Giải thích |
|----------|----------|------|
| **Blockchain** | BSC (Binance Smart Chain) | Hiệu suất cao, phí thấp |
| **Tiêu chuẩn Token** | USDT (BEP-20) | Stablecoin, giảm rủi ro biến động |
| **Phí Gas** | Người dùng chịu, khoảng 0.001-0.003 BNB/giao dịch | Chi phí vận hành minh bạch |
| **Đặc tính Hợp đồng** | Không thể nâng cấp, không có quyền quản trị viên | Đảm bảo phi tập trung |

### Quy phạm Tiêu chuẩn Thời gian

| Loại Thời gian | Cài đặt Tiêu chuẩn | Tình huống Áp dụng |
|----------|----------|----------|
| **Múi giờ Thống nhất** | UTC+8 (Giờ Singapore) | Tiêu chuẩn thống nhất toàn cầu |
| **Thời gian Quyết toán Ngày** | Hàng ngày 23:00 | Phát hành thưởng đóng góp bộ tộc |
| **Thời gian Đánh giá Cấp độ** | Hàng ngày 22:30 | Cập nhật trạng thái cấp độ |
| **Thời gian Quyết toán Tuần** | Thứ Hai hàng tuần 01:00 | Phân phối pool quân đoàn |

---

## VII. Quy trình Tham gia

### Quy trình Vận hành Cơ bản

**Danh sách Thao tác Giai đoạn Chuẩn bị**:
1. Chuẩn bị USDT chuỗi BSC
2. Chuẩn bị ít BNB làm phí Gas
3. Kết nối ví hỗ trợ BSC (như MetaMask)

**Các bước Thao tác Giai đoạn Đồng xây dựng**:
1. Chọn cấp độ đồng xây dựng (Ao/Am/AS)
2. Gọi hàm createOrder của hợp đồng
3. Chuyển USDT vào kho dự trữ nhà
4. Xác nhận hoàn thành giao dịch

**Hướng dẫn Thao tác Giai đoạn Thu hoạch**:
1. Chờ chu kỳ đồng xây dựng hoàn thành
2. Gọi hàm claimOrder để nhận hoàn trả
3. Quyết định có tiếp tục tham gia đồng xây dựng hay không

### Chiến lược Xây dựng Sinh thái

**Điểm then chốt Xây dựng Mạng Bộ tộc**:
1. **Ưu tiên phát triển giới thiệu trực tiếp chất lượng cao**: Chọn đối tác hợp tác hiểu dự án và có năng lực thực hiện
2. **Hình thành cấu trúc đại tiểu bộ tộc ổn định**: Cân bằng độ sâu đại bộ tộc và độ rộng tiểu bộ tộc
3. **Duy trì quan hệ hợp tác lâu dài**: Quan hệ bộ tộc là vĩnh viễn, cần duy trì tận tâm

**Quy hoạch Thăng tiến Cấp độ**:
1. **Giai đoạn tân thủ**: Khuyến nghị bắt đầu từ cấp Am, làm quen với cơ chế
2. **Giai đoạn phát triển**: Nâng cấp lên cấp AS, bắt đầu xây dựng mạng bộ tộc
3. **Giai đoạn trưởng thành**: Tranh thủ cấp AS6, tham gia cạnh tranh quân đoàn

**Chiến lược Cạnh tranh Quân đoàn**:
1. **Chú ý xếp hạng tổng đóng góp giá trị tiểu bộ tộc**: Đây là chỉ số cốt lõi của tuyển chọn quân đoàn
2. **Phát triển cân bằng nhiều tuyến giới thiệu**: Tránh phụ thuộc quá mức vào đại bộ tộc đơn lẻ
3. **Duy trì hoạt động liên tục**: Đảm bảo đơn hàng đồng xây dựng của bản thân và đội nhóm duy trì trạng thái hoạt động

---

## VIII. Cảnh báo Rủi ro

### Rủi ro Vận hành Kỹ thuật

| Loại Rủi ro | Mô tả Rủi ro | Biện pháp Phòng ngừa |
|----------|----------|----------|
| **Sai địa chỉ** | Sai địa chỉ chuyển tiền dẫn đến mất tiền | Xác nhận địa chỉ nhiều lần, sử dụng sổ địa chỉ |
| **Mất khóa riêng** | Mất khóa riêng sẽ vĩnh viễn mất quyền kiểm soát tài khoản | Sao lưu an toàn, bảo quản đa trọng |
| **Rủi ro Lừa đảo** | Trang web chính thức giả mạo hoặc địa chỉ hợp đồng | Chỉ truy cập qua kênh chính thức |

### Rủi ro Cơ chế Hệ thống

**Rủi ro Di cư Đàn kiến**:
- Mô tả rủi ro: Khi tiền kho dự trữ không đủ, hệ thống sẽ vào giai đoạn di cư
- Phạm vi ảnh hưởng: Giai đoạn khóa 3 ngày, tạm dừng tất cả thao tác
- Cơ chế bù đắp: Thưởng tiên phong di cư và thưởng xây dựng tổ mới

**Rủi ro Biến động Cấp độ**:
- Mô tả rủi ro: Đánh giá cấp độ dựa trên đóng góp thời gian thực, có thể xuất hiện giảm cấp độ
- Yếu tố ảnh hưởng: Đơn hàng thành viên đội nhóm hết hạn, độ hoạt động mạng giới thiệu giảm
- Chiến lược ứng phó: Duy trì đội nhóm hoạt động, giao tiếp kịp thời để tiếp tục xây dựng

**Rủi ro Bị loại khỏi Quân đoàn**:
- Mô tả rủi ro: Thành viên quân đoàn dựa trên xếp hạng cạnh tranh, tồn tại khả năng bị loại
- Mức độ cạnh tranh khốc liệt: Chỉ 36 người dùng AS6 hàng đầu mới có thể hưởng thưởng quân đoàn
- Chiến lược giữ hạng: Liên tục mở rộng quy mô tiểu bộ tộc, nâng cao sức cạnh tranh

---

## IX. Giải thích Thuật ngữ Chuyên môn

### Thuật ngữ Khái niệm Cốt lõi

| Thuật ngữ | Định nghĩa | Tình huống Áp dụng |
|------|------|----------|
| **Đơn hàng Đồng xây dựng Hoạt động** | Đơn hàng đồng xây dựng đã tạo nhưng chưa hoàn thành hoặc chưa nhận | Dữ liệu cơ sở của các loại tính toán |
| **Tuyến Giới thiệu** | Toàn bộ nhánh mạng cấp dưới bắt đầu từ một người giới thiệu trực tiếp nào đó | Đơn vị cơ bản của phân chia bộ tộc |
| **Đóng góp Giá trị Thời gian thực** | Tổng giá trị của tất cả đơn hàng đồng xây dựng hoạt động hiện tại | Căn cứ đánh giá cấp độ và xếp hạng |
| **Kỳ Lợi nhuận Đồng xây dựng** | Khoảng thời gian từ ngày thứ 2 sau khi tạo đơn hàng đến ngày hết hạn | Giai đoạn phát sinh thưởng đóng góp bộ tộc |

### Thuật ngữ Cơ chế Hệ thống

| Thuật ngữ | Định nghĩa | Tầm quan trọng |
|------|------|--------|
| **Người Tiên phong Di cư** | 36 người tham gia danh tính AS cuối cùng trước di cư đàn kiến | Nhận thưởng tiên phong 10% |
| **Lợi nhuận Ngày Thiết lập sẵn** | Số tiền lợi nhuận ngày cố định tương ứng với mỗi cấp độ | Cơ sở tính toán tất cả thưởng |
| **Thưởng Đóng góp Bộ tộc** | Cơ chế khuyến khích phân tầng dựa trên mạng giới thiệu | Nguồn thu nhập chính |
| **Pool Quân đoàn** | Pool thưởng cạnh tranh của người tham gia hàng đầu | Thưởng độc quyền cấp AS6 |

### Thuật ngữ liên quan Quản trị

- **Đánh giá Cấp độ**: Tính toán cấp độ động dựa trên trạng thái mạng bộ tộc hàng ngày 22:30
- **Cạnh tranh Quân đoàn**: Cạnh tranh xếp hạng của người dùng cấp AS6 dựa trên đóng góp tiểu bộ tộc
- **Di cư Đàn kiến**: Cơ chế quản lý rủi ro tự động và tiến hóa của hệ thống khi tiền hệ thống không đủ
- **Xây dựng Tổ mới**: Kế hoạch kế thừa giá trị và khuyến khích chu kỳ mới sau di cư

---

## X. Xác minh An toàn

### Xác minh Thông tin Chính thức

**Xác minh Địa chỉ Hợp đồng**:
- Chỉ có được địa chỉ hợp đồng qua kênh chính thức
- Xác minh code hợp đồng trên BSCScan
- Xác nhận chức năng hợp đồng phù hợp với mô tả tài liệu

**Xác minh Nguồn Thông tin**:
- Theo dõi kênh thông báo chính thức
- Cẩn thận trang web giả mạo và liên kết lừa đảo
- Xác minh danh tính người phát hành thông tin

### Khuyến nghị Vận hành An toàn

**An toàn Ví**:
- Sử dụng ví cứng hoặc ví phần mềm nổi tiếng
- Sao lưu định kỳ khóa riêng và cụm từ ghi nhớ
- Không thực hiện thao tác nhạy cảm trên mạng công cộng

**An toàn Giao dịch**:
- Kiểm tra cẩn thận tất cả tham số trước giao dịch
- Thiết lập giới hạn Gas hợp lý
- Lưu giữ bản ghi giao dịch để tiện tra cứu
