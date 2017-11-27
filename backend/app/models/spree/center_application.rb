class Spree::CenterApplication < Spree::Base
  validates :office_name, :head_doctor, :email, :num_of_doctors, :num_of_staff, :college, :degree, presence: true
  validates :num_of_doctors, :num_of_staff, numericality: { only_integer: true }

  belongs_to :address, class_name: 'Spree::Address', dependent: :destroy

  # admin, search
  self.whitelisted_ransackable_attributes = ['office_name', 'head_doctor', 'state']

  # admin, params
  accepts_nested_attributes_for :address

  # state machine
  state_machine :initial => :pending do
    event :review do
      transition :pending => :review
    end
    event :cancel do
      transition [:pending, :review] => :cancelled
    end
    event :resume do
      transition :cancelled => :review
    end
    event :accept do
      transition :review => :activated
    end
    event :deactivate do
      transition :activated => :deactivated
    end
    event :activate do
      transition :deactivated => :activated
    end
  end
end

