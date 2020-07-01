import React from 'react'
import './BreadcrumbsPage.scss'

function BreadcrumbsPage({caption}) {
    return (
        <div className="breadcrumbs-page">
            <div className="container">
                <span>{caption}</span>
            </div>
        </div>
    )
}

export default BreadcrumbsPage;