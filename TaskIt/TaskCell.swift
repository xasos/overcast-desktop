//
//  TaskCell.swift
//  TaskIt
//
//  Created by Niraj  on 12/31/14.
//  Copyright (c) 2014 Niraj Pant. All rights reserved.
//

import UIKit

class TaskCell: UITableViewCell {

    @IBOutlet weak var taskLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
