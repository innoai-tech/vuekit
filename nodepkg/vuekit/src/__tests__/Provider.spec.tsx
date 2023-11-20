import { describe, expect, test } from "bun:test";
import { t } from "@innoai-tech/typedef";
import { mount } from "@vue/test-utils";
import { ref, watch } from "vue";
import { component, createProvider } from "../index";

describe("Provider", () => {
	describe("static", () => {
		const P = createProvider(() => ({ context: "default" }));
		const C = component((_, _1) => {
			const p = P.use();
			return () => <div>{p.context}</div>;
		});

		test("could use default value", () => {
			const wrapper = mount(C, {});
			expect(wrapper.text()).toContain("default");
			wrapper.unmount();
		});

		test("could inject custom value", () => {
			const With = component((_, _1) => {
				return () => (
					<P value={{ context: "injected" }}>
						<C />
					</P>
				);
			});

			const wrapper = mount(With, {});
			expect(wrapper.text()).toContain("injected");

			wrapper.unmount();
		});
	});

	describe("reactive", () => {
		const P = createProvider(() => ref({ context: "default" }));
		const C = component((_, _1) => {
			const p = P.use();
			return () => <div>{p.value.context}</div>;
		});

		test("could use default value", () => {
			const wrapper = mount(C, {});
			expect(wrapper.text()).toContain("default");
			wrapper.unmount();
		});

		test("could inject custom value", async () => {
			const With = component(
				{
					context: t.string().optional().default("injected"),
				},
				(props, _) => {
					const r = ref({ context: props.context });

					watch(
						() => props.context,
						(context) => {
							r.value = { context: context };
						},
					);

					return () => (
						<P value={r}>
							<C />
						</P>
					);
				},
			);

			const wrapper = mount(With, {});
			expect(wrapper.text()).toContain("injected");
			await wrapper.setProps({
				context: "injected2",
			});
			expect(wrapper.text()).toContain("injected2");

			wrapper.unmount();
		});
	});

	describe("factory", () => {
		const P = createProvider(
			{
				input: t.string().default("default"),
			},
			(props) => ({ context: `${props.input}` }),
		);

		const C = component((_, _1) => {
			const p = P.use();
			return () => <div>{p.context}</div>;
		});

		test("could use default value", () => {
			const wrapper = mount(C, {});
			expect(wrapper.text()).toContain("default");
			wrapper.unmount();
		});

		test("could inject custom value", async () => {
			const With = component((_, _1) => {
				return () => (
					<P input={"injected"}>
						<C />
					</P>
				);
			});

			const wrapper = mount(With, {});
			expect(wrapper.text()).toContain("injected");

			wrapper.unmount();
		});
	});

	describe("reactive factory", () => {
		const P = createProvider(
			{
				input: t.string().default("default"),
			},
			(props) => {
				const r = ref(props.input);

				watch(
					() => props.input,
					(input) => {
						r.value = input;
					},
				);

				return r;
			},
		);

		const C = component((_, _1) => {
			const p = P.use();
			return () => <div>{p.value}</div>;
		});

		test("could use default value", () => {
			const wrapper = mount(C, {});
			expect(wrapper.text()).toContain("default");
			wrapper.unmount();
		});

		test("could inject custom value", async () => {
			const With = component(
				{
					input: t.string().optional().default("injected"),
				},
				(props, _) => {
					return () => (
						<P input={props.input}>
							<C />
						</P>
					);
				},
			);

			const wrapper = mount(With, {});
			expect(wrapper.text()).toContain("injected");

			for (let i = 0; i < 2; i++) {
				await wrapper.setProps({
					input: "injected2",
				});
				expect(wrapper.text()).toContain("injected2");
			}

			wrapper.unmount();
		});
	});
});
