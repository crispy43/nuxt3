import Card from '~/components/atoms/Card.vue';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'elevated',
          'primary',
          'neutural',
        ],
      },
    },
  },
};

const Template = args => ({
  components: { Card },
  setup() { return { args }; },
  template: `
<div class="w-full h-screen bg-white">
  <Card v-bind="args">
    <div style="padding: 100px;">
      Card
    </div>
  </Card>
</div>
  `,
});

export const elevated = Template.bind({});
elevated.args = { type: 'elevated' };

export const primary = Template.bind({});
primary.args = { type: 'primary' };

export const neutural = Template.bind({});
neutural.args = { type: 'neutural' };
