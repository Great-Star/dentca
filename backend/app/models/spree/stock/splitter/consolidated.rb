module Spree
    module Stock
        module Splitter
            class Consolidated < Spree::Stock::Splitter::Base

                def split(packages)
                    split_packages = []
                    packages.each do |package|
                        #   build consolidated package
                        if package.on_consolidation.size > 0    
                            split_packages << build_package(package.on_consolidation)   
                        end
                        
                        #   build separated packages
                        if package.on_separation.size > 0       
                            package.on_separation.each { |content| split_packages << build_package([content]) }
                        end
                    end
                    return_next split_packages
                end

            end
        end
    end
end