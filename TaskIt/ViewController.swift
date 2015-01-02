//
//  ViewController.swift
//  TaskIt
//
//  Created by Niraj  on 12/19/14.
//  Copyright (c) 2014 Niraj Pant. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    @IBOutlet weak var tableView: UITableView!
    
    var taskArray: [Dictionary<String, String>] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let task1: Dictionary<String, String> = ["task": "Study French", "subtask": "Verbs in past and present", "date": "01/10/2014"]
    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // UITableViewDataSource
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 5
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        println(indexPath.row)
        
        var cell: TaskCell = tableView.dequeueReusableCellWithIdentifier("myCell") as TaskCell
        
        cell.taskLabel.text = "Study French"
        cell.descriptionLabel.text = "Verbs in past and present"
        cell.dateLabel.text = "01/10/2014"
        
        return cell
    }
    
    // UITableViewDelegate
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        
    }
}

