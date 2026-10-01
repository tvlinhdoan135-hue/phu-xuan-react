import {
    useState,
    type ChangeEvent,
    type FormEvent
} from "react";

import type {
    MonAnTrongGio
} from "../data/monAn";

interface OrderFormProps {
    gioHang: MonAnTrongGio[];
    tongTien: number;
}

interface FormData {
    hoTen: string;
    soDienThoai: string;
    diaChi: string;
    ghiChu: string;
}

function OrderForm({
    gioHang,
    tongTien
}: OrderFormProps) {
    const [form, setForm] =
        useState<FormData>({
            hoTen: "",
            soDienThoai: "",
            diaChi: "",
            ghiChu: ""
        });

    function handleChange(
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) {
        const {
            name,
            value
        } = e.target;

        setForm((cu) => ({
            ...cu,
            [name]: value
        }));
    }

    function handleSubmit(
        e: FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (!form.hoTen.trim()) {
            alert(
                "Vui lòng nhập họ tên"
            );
            return;
        }

        if (!form.soDienThoai.trim()) {
            alert(
                "Vui lòng nhập số điện thoại"
            );
            return;
        }

        if (!form.diaChi.trim()) {
            alert(
                "Vui lòng nhập địa chỉ"
            );
            return;
        }

        if (gioHang.length === 0) {
            alert(
                "Vui lòng chọn ít nhất một món"
            );
            return;
        }

        alert(
            `Đặt món thành công!\nTổng tiền: ${tongTien.toLocaleString(
                "vi-VN"
            )}đ`
        );
    }

    return (
        <section className="order-form">
            <h2>
                Thông tin đặt món
            </h2>

            <form
                onSubmit={handleSubmit}
            >
                <input
                    name="hoTen"
                    value={form.hoTen}
                    onChange={
                        handleChange
                    }
                    placeholder="Họ và tên"
                />

                <input
                    name="soDienThoai"
                    value={
                        form.soDienThoai
                    }
                    onChange={
                        handleChange
                    }
                    placeholder="Số điện thoại"
                />

                <input
                    name="diaChi"
                    value={form.diaChi}
                    onChange={
                        handleChange
                    }
                    placeholder="Địa chỉ giao hàng"
                />

                <textarea
                    name="ghiChu"
                    value={form.ghiChu}
                    onChange={
                        handleChange
                    }
                    placeholder="Ghi chú"
                />

                <button type="submit">
                    Đặt món
                </button>
            </form>
        </section>
    );
}

export default OrderForm;