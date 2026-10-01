import type {
  MonAnTrongGio,
} from "../data/monAn";

import { useForm } from "../hooks/useForm";

interface OrderFormProps {
  gioHang: MonAnTrongGio[];
  tongTien: number;
}

interface DuLieuDatMon {
  hoTen: string;
  soDienThoai: string;
  diaChi: string;
  ghiChu: string;
}

const GIA_TRI_BAN_DAU: DuLieuDatMon = {
  hoTen: "",
  soDienThoai: "",
  diaChi: "",
  ghiChu: "",
};

function kiemChung(
  duLieu: DuLieuDatMon
): Partial<Record<keyof DuLieuDatMon, string>> {
  const loi: Partial<
    Record<keyof DuLieuDatMon, string>
  > = {};

  if (!duLieu.hoTen.trim()) {
    loi.hoTen =
      "Vui lòng nhập họ và tên.";
  }

  if (!duLieu.soDienThoai.trim()) {
    loi.soDienThoai =
      "Vui lòng nhập số điện thoại.";
  } else if (
    !/^(0|\+84)\d{9,10}$/.test(
      duLieu.soDienThoai.trim()
    )
  ) {
    loi.soDienThoai =
      "Số điện thoại không hợp lệ.";
  }

  if (!duLieu.diaChi.trim()) {
    loi.diaChi =
      "Vui lòng nhập địa chỉ giao hàng.";
  }

  if (duLieu.ghiChu.length > 200) {
    loi.ghiChu =
      "Ghi chú không được vượt quá 200 ký tự.";
  }

  return loi;
}

function OrderForm({
  gioHang,
  tongTien,
}: OrderFormProps) {
  const {
    duLieu,
    dangGui,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
  } = useForm(
    GIA_TRI_BAN_DAU,
    kiemChung
  );

  const gui = xuLyGui(
    async (duLieuDatMon) => {
      if (gioHang.length === 0) {
        alert(
          "Vui lòng chọn ít nhất một món."
        );
        return;
      }

      await new Promise<void>(
        (resolve) => {
          setTimeout(resolve, 800);
        }
      );

      alert(
        `Đặt món thành công!\n\n` +
        `Khách hàng: ${duLieuDatMon.hoTen}\n` +
        `Số điện thoại: ${duLieuDatMon.soDienThoai}\n` +
        `Tổng tiền: ${tongTien.toLocaleString(
          "vi-VN"
        )}đ`
      );

      datLai();
    }
  );

  return (
    <section className="order-form">
      <h2>Thông tin đặt món</h2>

      <form
        onSubmit={gui}
        noValidate
      >
        <div className="form-field">
          <label htmlFor="hoTen">
            Họ và tên
          </label>

          <input
            id="hoTen"
            name="hoTen"
            value={duLieu.hoTen}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            placeholder="Nguyễn Văn A"
          />

          {loiCuaO("hoTen") && (
            <p
              className="form-error"
              role="alert"
            >
              {loiCuaO("hoTen")}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="soDienThoai">
            Số điện thoại
          </label>

          <input
            id="soDienThoai"
            name="soDienThoai"
            value={duLieu.soDienThoai}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            placeholder="0901234567"
          />

          {loiCuaO("soDienThoai") && (
            <p
              className="form-error"
              role="alert"
            >
              {loiCuaO("soDienThoai")}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="diaChi">
            Địa chỉ giao hàng
          </label>

          <input
            id="diaChi"
            name="diaChi"
            value={duLieu.diaChi}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            placeholder="Địa chỉ nhận món"
          />

          {loiCuaO("diaChi") && (
            <p
              className="form-error"
              role="alert"
            >
              {loiCuaO("diaChi")}
            </p>
          )}
        </div>

        <div className="form-field full">
          <label htmlFor="ghiChu">
            Ghi chú
          </label>

          <textarea
            id="ghiChu"
            name="ghiChu"
            value={duLieu.ghiChu}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            placeholder="Ví dụ: ít cay, giao trước 12h..."
          />

          <div className="form-hint">
            {duLieu.ghiChu.length}/200 ký tự
          </div>

          {loiCuaO("ghiChu") && (
            <p
              className="form-error"
              role="alert"
            >
              {loiCuaO("ghiChu")}
            </p>
          )}
        </div>

        <div className="order-summary">
          <span>Tổng tiền</span>

          <strong>
            {tongTien.toLocaleString(
              "vi-VN"
            )}đ
          </strong>
        </div>

        <button
          type="submit"
          disabled={dangGui}
        >
          {dangGui
            ? "Đang xử lý..."
            : "Đặt món"}
        </button>
      </form>
    </section>
  );
}

export default OrderForm;