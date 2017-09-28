module Spree
    User.class_eval do
        before_save { self.corporate_account_id = nil if !selected_user_roles.include?('corporate user') }

        belongs_to :spree_corporate_accounts, :foreign_key => "corporate_account_id"

        def selected_user_roles
            self.spree_roles.pluck(:name)
        end
    end
end