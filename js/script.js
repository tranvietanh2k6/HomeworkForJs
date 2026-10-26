// 1. Lấy các phần tử HTML cần thao tác
const mainDiv = document.getElementById('main-container');
const mainText = document.getElementById('main-text');

// 2. Lưu lại trạng thái ban đầu để dùng cho hàm undo()
const originalText = mainText.innerHTML;
const originalBg = mainDiv.style.backgroundImage;

/**
 * Hàm update: Chạy khi di chuột VÀO ảnh nhỏ
 * @param {HTMLElement} previewPic - Thẻ img đang được trỏ tới
 */
function update(previewPic) {
    // (Tùy chọn) In ra console để kiểm tra sự kiện có hoạt động không
    console.log("Đang xem:", previewPic.alt);
    
    // Cập nhật văn bản (lấy từ thuộc tính alt của ảnh)
    mainText.innerHTML = previewPic.alt;
    
    // Cập nhật hình nền cho khung lớn (lấy từ thuộc tính src của ảnh)
    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
    
    // Ẩn background trắng đi để thấy ảnh rõ hơn
    mainDiv.style.backgroundColor = 'transparent'; 
}

/**
 * Hàm undo: Chạy khi di chuột RA KHỎI ảnh nhỏ
 */
function undo() {
    // Khôi phục lại văn bản gốc
    mainText.innerHTML = originalText;
    
    // Khôi phục lại hình nền gốc (rỗng)
    mainDiv.style.backgroundImage = originalBg;
    
    // Khôi phục màu nền trắng ban đầu
    mainDiv.style.backgroundColor = '#fff';
}
