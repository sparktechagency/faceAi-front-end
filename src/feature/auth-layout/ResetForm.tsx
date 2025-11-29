"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("New Password:", values.newPassword);
    console.log("Confirm Password:", values.confirmPassword);
    router.push("/auth/success?mode=reset");
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title ">Reset Your Password</h3>
        <p className="text-sm text-[#7E7E7E]">
          Enter your new password to reset your account.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            {/* New Password */}
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your new password" },
              ]}
              className="form-item"
            >
              <Input.Password
                placeholder="Enter new password"
                className="custom-input"
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match");
                  },
                }),
              ]}
              className="form-item"
            >
              <Input.Password
                placeholder="Confirm new password"
                className="custom-input"
              />
            </Form.Item>

            {/* Reset Button */}
            <Button
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]! to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
      {/* empty div */}
      <div></div>
    </div>
  );
}
