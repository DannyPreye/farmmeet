import React from "react";

import Login from "../../../app/auth/login/page";
import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "@/components/auth";

describe("The login page", () => {
    it("renders correctly", () => {
        const rootElement = document.createElement("div");
        render(<PrimaryButton title="Login" />);
        screen.debug();
    });
});
